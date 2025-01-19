import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciarsesion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './iniciarsesion.component.html',
  styleUrl: './iniciarsesion.component.css'
})
export class IniciarsesionComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  
  }

  loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    dia: new FormControl('', Validators.required),
  });

  iniciarSesion() {
    let usuario = this.loginForm.get("usuario")?.value,
        password = this.loginForm.get("password")?.value;

        
  }

}
