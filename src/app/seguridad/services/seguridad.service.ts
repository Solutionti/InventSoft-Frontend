import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environmen.development';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(
    private http: HttpClient
  ) { }

  getUsuarios(){
    const url =  `${environment.apiInventsoft}getUsuarios`;

     return this.http.get(url);
  }



}
