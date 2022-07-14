import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

import { Properties, Property } from './shared/interfaces/properties.interface';
import { PropertiesService } from './shared/services/properties.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Codisa';
  constructor(private propertiesServices: PropertiesService) {}
  ngOnInit(): void {
    this.getProperties(this.currentProperty);
  }
  properties: Properties[] = [];
  property: any;
  currentPropertyImg = '';
  currentProperty: number = 0;

  getProperties(index: number) {
    try {
      this.propertiesServices.getProperties().subscribe((res: any) => {
         this.properties = res.properties;
         this.property = res.properties[index];


         this.getPropertyImage(res.properties[index]._id);
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getPropertyImage(id: string) {
    return this.propertiesServices.getPropertiesImages(id).subscribe((res) => {
      this.currentPropertyImg = res.images[0];

    });
  }

  nextProperty(index: number) {
console.log(index, 'index');
  this.currentProperty++;
  index++;

    if (index == this.properties.length) {
      console.log('weo');

      this.currentProperty = 0;
      this.getProperties(this.currentProperty);
      return;
    }
    this.getProperties(this.currentProperty);

  }
  viewOnMap(property: Property) {
    let mapUrl = `https://www.google.com/maps/search/?api=1&query=${property.location.latitude},${property.location.longitude}`;
    window.open(mapUrl, '_blank');
  }
}
