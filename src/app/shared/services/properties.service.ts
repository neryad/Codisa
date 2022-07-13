import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  //properties;
  //images/6140f2528e048453ea123c98
  constructor(private http:HttpClient) {}
}
