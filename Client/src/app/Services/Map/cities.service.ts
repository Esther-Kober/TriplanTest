
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { City } from 'src/app/City';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {

  baseUrl ='http://localhost:5000/api/'
  constructor(private http: HttpClient) { }    

  getAll():Observable<City[]> {
    return this.http.get<City[]>(`${this.baseUrl}getCities`)
  }
}