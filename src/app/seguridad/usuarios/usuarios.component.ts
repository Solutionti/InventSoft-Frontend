import { SeguridadService } from './../services/seguridad.service';
import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../../componentes/menu/menu.component";
import { TableModule } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    MenuComponent,
    TableModule,
    ReactiveFormsModule
  ],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
  providers:[ConfirmationService,MessageService]
})
export class UsuariosComponent implements OnInit{

  constructor(
    private SeguridadService: SeguridadService,
    private MessageService: MessageService,
    private ConfirmationService: ConfirmationService
  ){}

  ngOnInit(): void {

    this.getUsuarios()
  }

  usuariosForm: FormGroup = new FormGroup({
    usuario_nombre: new FormControl(''),
    usuario_apellido: new FormControl(''),
    usuario_user: new FormControl(''),
    usuario_contraseña: new FormControl(''),
    usuario_correo: new FormControl(''),
    usuario_telefono: new FormControl(''),
    usuario_empresa: new FormControl(''),
    usuario_rol: new FormControl(''),
    usuario_estado: new FormControl(''),
  });

  getUsuario: any [] = [];
  getUsuarios(){
    this.SeguridadService
        .getUsuarios()
        .subscribe((response: any )=>{
          this.getUsuario = response;
        })
  }



}
