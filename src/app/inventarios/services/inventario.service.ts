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

     postAgregarProductos(datos: any){
      const url = `${environment.apiInventsoft}postAgregarProductos`;

      return this.http.post(url, {
        categoria: datos[0].categoria,
        url_imagen: datos[0].url_imagen,
        codigo: datos[0].codigo,
        codigo_barras: datos[0].codigo_barras,
        nombre: datos[0].nombre,
        medida: datos[0].medida,
        precio: datos[0].precio,
        costo_proveedor: datos[0].costo_proveedor,
        moneda: datos[0].moneda,
        descripcion: datos[0].descripcion,
        stock: datos[0].stock,
        cantidad: datos[0].cantidad,
        producto_venta: datos[0].producto_venta,
        producto_ecommerce: datos[0].producto_ecommerce,
       });
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
