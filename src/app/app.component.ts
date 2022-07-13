import { Component, OnInit } from '@angular/core';
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
    this.getProperties();
  }
  properties!: Property;
  getProperties() {
    this.propertiesServices.getProperties().subscribe((res: any) => {
      this.properties = res.properties[0];
      console.log(this.properties);
    });
  }
}
