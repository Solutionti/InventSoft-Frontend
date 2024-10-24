import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { environment } from '../../../environments/environmen.development';
import { HtmlParser } from '@angular/compiler';



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

     getProductoStock(codigo: any ) {
      const url =  `${environment.apiInventsoft}getProductoStock`;
      let params = new HttpParams().set("codigo", codigo);
      return this.http.get(url, { params });
     }

     getProductStock(codigo: any ) {
      const url =  `${environment.apiInventsoft}getProductStock`;
      let params = new HttpParams().set("codigo", codigo);
      return this.http.get(url, { params });
     }

     postAgregarProductos(formdata: FormData){
      const url = `${environment.apiInventsoft}postAgregarProductos`;

      return this.http.post(url,  formdata );
     }

     entradaKardex(datos: any){
      const url = `${environment.apiInventsoft}entradaKardex`;

      return this.http.post(url,{
        producto_entrada: datos[0].producto_entrada,
        cantidad_entrada: datos[0].cantidad_entrada,
        stock_entrada: datos[0].stock_entrada,
        seccion_entrada: datos[0].seccion_entrada,
        motivo_entrada: datos[0].motivo_entrada,
        comentarios_entrada: datos[0].comentarios_entrada,
        usuario: datos[0].usuario,
      });
     }

     salidakardex(datos: any){
      const url = `${environment.apiInventsoft}salidakardex`;

      return this.http.post(url,{
        id_producto: datos[0].id_producto,
        salida: datos[0].salida,
        stock_salida: datos[0].stock_salida,
        sede: datos[0].sede,
        motivo: datos[0].motivo,
        descripcion: datos[0].descripcion,
        usuario: datos[0].usuario,
      });
     }




}
