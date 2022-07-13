import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  //properties;
  //images/6140f2528e048453ea123c98
  constructor(private http: HttpClient) {}

  getProperties():Observable<any> {
    return this.http.get(`${environment.apiUrl}properties`);
  }

  getPropertiesImages(id:string):Observable<any>{
    return this.http.get(`${environment.apiUrl}images/${id}`);
  }
}

