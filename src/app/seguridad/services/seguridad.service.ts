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

  CrearUpdateUsuarios(data: any ) {
    const url =  `${environment.apiInventsoft}CrearUpdateUsuarios`;
    
    return this.http.post(url, {
      nombre: data[0].nombre,
      apellido: data[0].apellido,
      usuario: data[0].usuario,
      password: data[0].password,
      email: data[0].email,
      telefono: data[0].telefono,
      empresa: data[0].empresa,
      rol_usuario: data[0].rol_usuario,
      estado: data[0].estado
    });
  }

  iniciarSesion(email: any, password: any) {
    const url =  `${environment.apiInventsoft}iniciarsesion`;

    return this.http.post(url, {
      email: email,
      password: password
    });
  }

  logOut() {
    const url =  `${environment.apiInventsoft}logOut`;
  }

}
