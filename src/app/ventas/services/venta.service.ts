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

  getComprasInsert(datos: any){
    const url = `${environment.apiInventsoft}getComprasInsert`;

    return this.http.post(url, {
      categoria: datos[0].categoria,
      proveedor: datos[0].proveedor,
      fecha: datos[0].fecha,
      fecha_limite: datos[0].fecha_limite,
      descripcion: datos[0].descripcion,
      precio: datos[0].precio,
      usuario: datos[0].usuario,
      porpagar: datos[0].porpagar,
    });
  }

}
