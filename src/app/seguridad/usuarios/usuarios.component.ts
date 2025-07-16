import { SeguridadService } from './../services/seguridad.service';
import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../../componentes/menu/menu.component";
import { TableModule } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';




@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    MenuComponent,
    TableModule,
    ReactiveFormsModule,
    ToastModule
  ],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
  providers:[ConfirmationService,MessageService]
})
export class UsuariosComponent implements OnInit{

  constructor(
    private SeguridadService: SeguridadService,
    private messageService: MessageService,
  ){
    this.spinner = false;
  }

  ngOnInit(): void {
    this.spinner = false;
    this.getUsuarios();
    this.spinner = true;
  }

  spinner = false;
  usuariosForm: FormGroup = new FormGroup({
    usuario_nombre: new FormControl('', Validators.required),
    usuario_apellido: new FormControl('', Validators.required),
    usuario_user: new FormControl('', Validators.required),
    usuario_contraseña: new FormControl(''),
    usuario_correo: new FormControl('', Validators.required),
    usuario_telefono: new FormControl('', Validators.required),
    usuario_empresa: new FormControl('InventSoft'),
    usuario_rol: new FormControl('Administrador', Validators.required),
    usuario_estado: new FormControl('Activo', Validators.required),
  });

  getUsuario: any [] = [];
  getUsuarios(){
    this.SeguridadService
        .getUsuarios()
        .subscribe((response: any )=>{
          this.getUsuario = response;
        })
  }

  CrearUpdateUsuarios() {
    this.spinner = false;
    let data  = [{
      nombre: this.usuariosForm.get("usuario_nombre")?.value,
      apellido: this.usuariosForm.get("usuario_apellido")?.value,
      usuario: this.usuariosForm.get("usuario_user")?.value,
      password: this.usuariosForm.get("usuario_contraseña")?.value,
      email: this.usuariosForm.get("usuario_correo")?.value,
      telefono: this.usuariosForm.get("usuario_telefono")?.value,
      empresa: this.usuariosForm.get("usuario_empresa")?.value,
      rol_usuario: this.usuariosForm.get("usuario_rol")?.value,
      estado: this.usuariosForm.get("usuario_estado")?.value,
    }];
    this.SeguridadService
        .CrearUpdateUsuarios(data)
        .subscribe((response: any ) => {
          if(response.status == 200) {
            this.getUsuarios();
            this.spinner = true;
            this.usuariosForm.patchValue({
              usuario_nombre: '',
              usuario_apellido: '',
              usuario_user: '',
              usuario_contraseña: '',
              usuario_correo: '',
              usuario_telefono: '',
              usuario_empresa: 'InventSoft',
              usuario_rol: 'Administrador',
              usuario_estado: 'Activo',
            });
            this.showSuccess(response.message);
          }
          else {
            this.showError(response.message);
            this.spinner = true;
          }
        });
  }

  pasarDatosInput(usuario: any ) {
    this.usuariosForm.patchValue({
      usuario_nombre: usuario.nombre,
      usuario_apellido: usuario.apellido,
      usuario_user: usuario.usuario,
      usuario_contraseña: '',
      usuario_correo: usuario.email,
      usuario_telefono: usuario.telefono,
      usuario_empresa: 'InventSoft',
      usuario_rol: usuario.rol_usuario,
      usuario_estado: usuario.estado,
    });
  }

  showError(message: any) {
    
    this.messageService.add(
      {
        severity: 'error',
        summary: 'ClinicSoft Aviso',
        detail: message
      }
    );
  }

  showSuccess(message: any) {
    this.messageService.add({
      severity: 'success',
      summary: 'ClinicSoft Aviso', 
      detail: message
    });
  }


}
