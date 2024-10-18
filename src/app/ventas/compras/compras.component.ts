import { VentaService } from './../services/venta.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../../componentes/menu/menu.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [
    MenuComponent,
    ReactiveFormsModule,
    TableModule,
    CommonModule
  ],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent {

  constructor(
    private VentaService: VentaService
  ){}

  ngOnInit(): void {

    this.getCompras();
  }

  comprasForm: FormGroup = new FormGroup ({
    compras_nombre: new FormControl(''),
    compras_usuario: new FormControl(''),
    compras_contrasena: new FormControl(''),
    compras_telefono: new FormControl(''),
    compras_rol: new FormControl(''),
    compras_estado: new FormControl(''),
  });

  getCompra: any [] = [];
  getCompras(){
    this.VentaService
        .getCompras()
        .subscribe((response: any)=>{
        this.getCompra = response;
        })

  };

}
