import { InventarioService } from './../services/inventario.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MenuComponent } from "../../componentes/menu/menu.component";
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MenuComponent,
    CommonModule,
    ToastModule,
    RouterOutlet
],
  templateUrl: './inventario.component.html',
  providers: [MessageService],
  styleUrl: './inventario.component.css'
})
export class InventarioComponent implements OnInit {

  constructor(
    private InventarioServices: InventarioService,
    private messageService: MessageService,
  ){

  }

  ngOnInit(): void {

  }

  salidaForm = new FormGroup ({
    producto_salida: new FormControl('',[Validators.required]),
    cantidad_salida: new FormControl('',[Validators.required]),
    stock_salida: new FormControl('',[Validators.required]),
    seccion_salida: new FormControl('',[Validators.required]),
    motivo_salida: new FormControl('',[Validators.required]),
    comentarios_salida: new FormControl('',[Validators.required]),
  });

  entradaForm = new FormGroup ({
    producto_entrada: new FormControl(''),
    cantidad_entrada: new FormControl(''),
    stock_entrada: new FormControl(''),
    seccion_entrada: new FormControl(''),
    motivo_entrada: new FormControl(''),
    comentarios_entrada: new FormControl(''),
  });

  productoForm = new FormGroup ({
    categoria_productos: new FormControl(''),
    nombre_productos: new FormControl(''),
    codigo_productos: new FormControl(''),
    barras_productos: new FormControl(''),
    medida_productos: new FormControl(''),
    cantidad_productos: new FormControl(''),
    precio_productos: new FormControl(''),
    moneda_productos: new FormControl(''),
    descripcion_productos: new FormControl(''),
  });

  get productoControl(): FormControl {
    return this.salidaForm.get('producto_salida') as FormControl;
  }

  get cantidadControl(): FormControl {
    return this.salidaForm.get('cantidad_salida') as FormControl;
  }

  get stockControl(): FormControl {
    return this.salidaForm.get('stock_salida') as FormControl;
  }

  get seccionControl(): FormControl {
    return this.salidaForm.get('seccion_salida') as FormControl;
  }

  get motivoControl(): FormControl {
    return this.salidaForm.get('motivo_salida') as FormControl;
  }

  get comentarioControl(): FormControl {
    return this.salidaForm.get('comentarios_salida') as FormControl;
  }

    getProducto: any [] = [];
    getProductos(){
      this.InventarioServices
          .getProductos()
          .subscribe((response: any) =>{
          this.getProducto = response;
         })
 }

}
