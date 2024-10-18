import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environmen.development';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(
    private http: HttpClient
  ) { }

  getPedido(){
    const url =  `${environment.apiInventsoft}getPedido`;

     return this.http.get(url);
  };

  getCompras(){
    const url =  `${environment.apiInventsoft}getCompras`;

    return this.http.get(url);
  };

}
