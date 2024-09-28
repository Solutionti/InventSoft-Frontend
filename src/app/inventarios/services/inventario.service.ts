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

    getCategorias() {
      const url =  `${environment.apiInventsoft}getCategorias`;

      return this.http.get(url);
     }

     postAgregarProductos(datos: any){
      const url = `${environment.apiInventsoft}postAgregarProductos`;

      return this.http.post(url, {
        categoria: datos[0].categoria,
        nombre: datos[0].nombre,
        codigo: datos[0].codigo,
        codigo_barras: datos[0].codigo_barras,
        medida: datos[0].medida,
        cantidad: datos[0].cantidad,
        precio: datos[0].precio,
        moneda: datos[0].moneda,
        descripcion: datos[0].descripcion
       });
     }

}
