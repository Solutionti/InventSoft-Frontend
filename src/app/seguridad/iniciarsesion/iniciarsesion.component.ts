import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SeguridadService } from '../services/seguridad.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-iniciarsesion',
  standalone: true,
  imports: [ReactiveFormsModule,ToastModule],
  templateUrl: './iniciarsesion.component.html',
  styleUrl: './iniciarsesion.component.css',
  providers: [MessageService],
})
export class IniciarsesionComponent implements OnInit {

  constructor(
    private seguridadServices: SeguridadService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.spinner = false;
  }

  ngOnInit(): void {
    this.spinner = true;
  }

  spinner = false;

  loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    dia: new FormControl('', Validators.required),
  });

  iniciarSesion() {
    this.spinner = false;
    let usuario = this.loginForm.get("usuario")?.value,
        password = this.loginForm.get("password")?.value,
        dia: any  = this.loginForm.get("dia")?.value;

      this.seguridadServices
          .iniciarSesion(usuario,password)
          .subscribe((response: any ) => {
            if(response.status == 200) {
              sessionStorage.setItem('token', response.token);
              localStorage.setItem('token', JSON.stringify(response.token));
              localStorage.setItem('nombre', response.users.nombre.toUpperCase());
              localStorage.setItem('apellido', response.users.apellido.toUpperCase());
              localStorage.setItem('usuario', response.users.usuario.toUpperCase());
              localStorage.setItem('rol', response.users.rol_usuario.toUpperCase());
              localStorage.setItem('estado', response.users.estado.toUpperCase());
              localStorage.setItem('dia', dia);
              this.spinner = false;
              this.showSuccess();
                setTimeout(() => {
                  this.router.navigate(['/', 'inicio']);
                  this.spinner = true;
                }, 3000)
              }
              else {
                let message = "El usuario y/o contraseña ingresado son invalidos."
                this.showError(message);
                this.spinner = true;
            }
        });    
    }

  showError(message: string) {
    
    this.messageService.add(
      {
        severity: 'error',
        summary: 'ClinicSoft Aviso',
        detail: message
      }
    );
  }

  showSuccess() {
    let nombre = localStorage.getItem('nombre');
    let apellido = localStorage.getItem('apellido');
    let rol = localStorage.getItem('rol');
    this.messageService.add({
      severity: 'success',
      summary: 'Bienvenido a ClinicSoft  !!', 
      detail: nombre?.toLocaleUpperCase() + '  ' +  apellido?.toLocaleUpperCase() + ' ' + rol?.toLocaleUpperCase()
    });
  }

}
