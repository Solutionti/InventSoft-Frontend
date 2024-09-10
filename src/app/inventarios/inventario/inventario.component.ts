import { InventarioService } from './../services/inventario.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from "../../componentes/menu/menu.component";

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MenuComponent
],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent implements OnInit {

  constructor(
    private InventarioServices: InventarioService
  ){

  }

  ngOnInit(): void {

  }

  salidaForm = new FormGroup ({
    producto_salida: new FormControl(''),
    cantidad_salida: new FormControl(''),
    stock_salida: new FormControl(''),
    seccion_salida: new FormControl(''),
    motivo_salida: new FormControl(''),
    comentarios_salida: new FormControl(''),
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





}
