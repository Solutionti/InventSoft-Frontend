import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { environment } from '../../../environments/environmen.development';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(
    private http: HttpClient
  ) { }

     getProductos() {
     const url =  `${environment.apiInventsoft}getProductos`;

     return this.http.get(url);
    }

}
