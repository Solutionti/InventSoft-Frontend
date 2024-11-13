import { SeguridadService } from './../services/seguridad.service';
import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../../componentes/menu/menu.component";
import { TableModule } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    MenuComponent,
    TableModule,
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
  getUsuario: any [] = [];
  getUsuarios(){
    this.SeguridadService
        .getUsuarios()
        .subscribe((response: any )=>{
          this.getUsuario = response;
        })
  }



}
