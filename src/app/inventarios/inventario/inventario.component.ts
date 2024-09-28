import { InventarioService } from './../services/inventario.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MenuComponent } from "../../componentes/menu/menu.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MenuComponent,
    CommonModule,
    RouterOutlet
],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent implements OnInit {
  messageService: any;

  constructor(
    private InventarioServices: InventarioService,
  ){

  }

  ngOnInit(): void {

    this.getProductos();
    this.getCategorias();

  }

  salidaForm: FormGroup = new FormGroup ({
    producto_salida: new FormControl('',[Validators.required]),
    cantidad_salida: new FormControl('',[Validators.required]),
    stock_salida: new FormControl('',[Validators.required]),
    seccion_salida: new FormControl('',[Validators.required]),
    motivo_salida: new FormControl('',[Validators.required]),
    comentarios_salida: new FormControl('',[Validators.required]),
  });

  entradaForm: FormGroup = new FormGroup ({
    producto_entrada: new FormControl('',[Validators.required]),
    cantidad_entrada: new FormControl('',[Validators.required]),
    stock_entrada: new FormControl('',[Validators.required]),
    seccion_entrada: new FormControl('',[Validators.required]),
    motivo_entrada: new FormControl('',[Validators.required]),
    comentarios_entrada: new FormControl('',[Validators.required]),
  });

  productoForm: FormGroup = new FormGroup ({
    categoria_productos: new FormControl('',[Validators.required]),
    nombre_productos: new FormControl('',[Validators.required]),
    codigo_productos: new FormControl('',[Validators.required]),
    barras_productos: new FormControl(''),
    medida_productos: new FormControl('',[Validators.required]),
    cantidad_productos: new FormControl('',[Validators.required]),
    precio_productos: new FormControl('',[Validators.required]),
    moneda_productos: new FormControl('',[Validators.required]),
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

  get producto_entrada(): FormControl {
    return this.entradaForm.get('producto_entrada') as FormControl;
  }

  get cantidad_entrada(): FormControl {
    return this.entradaForm.get('cantidad_entrada') as FormControl;
  }

  get stock_entrada(): FormControl {
    return this.entradaForm.get('stock_entrada') as FormControl;
  }

  get seccion_entrada(): FormControl {
    return this.entradaForm.get('seccion_entrada') as FormControl;
  }

  get motivo_entrada(): FormControl {
    return this.entradaForm.get('motivo_entrada') as FormControl;
  }

  get comentarios_entrada(): FormControl {
    return this.entradaForm.get('comentarios_entrada') as FormControl;
  }

  get categoria_productos(): FormControl {
    return this.productoForm.get('categoria_productos') as FormControl;
  }

  get nombre_productos(): FormControl {
    return this.productoForm.get('nombre_productos') as FormControl;
  }

  get codigo_productos(): FormControl {
    return this.productoForm.get('codigo_productos') as FormControl;
  }

  get medida_productos(): FormControl {
    return this.productoForm.get('medida_productos') as FormControl;
  }

  get cantidad_productos(): FormControl {
    return this.productoForm.get('cantidad_productos') as FormControl;
  }

  get precio_productos(): FormControl {
    return this.productoForm.get('precio_productos') as FormControl;
  }

  get moneda_productos(): FormControl {
    return this.productoForm.get('moneda_productos') as FormControl;
  }

    getProducto: any [] = [];
    getProductos(){
      this.InventarioServices
          .getProductos()
          .subscribe((response: any) =>{
          this.getProducto = response;
         })
 }
   getCategoria: any [] = [];
   getCategorias(){
      this.InventarioServices
          .getCategorias()
          .subscribe((response: any) => {
          this.getCategoria = response;
          })
   }

   postAgregarProductos(){
    let crear : any =[
      {
      categoria: this.productoForm.get("categoria_productos")?.value,
      nombre: this.productoForm.get("nombre_productos")?.value,
      codigo: this.productoForm.get("codigo_productos")?.value,
      codigo_barras: this.productoForm.get("barras_productos")?.value,
      medida: this.productoForm.get("medida_productos")?.value,
      cantidad: this.productoForm.get("cantidad_productos")?.value,
      precio: this.productoForm.get("precio_productos")?.value,
      moneda: this.productoForm.get("moneda_productos")?.value,
      descripcion: this.productoForm.get("descripcion_productos")?.value,
    }
  ];
  this.InventarioServices
      .postAgregarProductos(crear)
      .subscribe((response: any)=> {
        if(response.status == 200){
          this.showSuccess(response.mesagge);
          this.productoForm.reset();
        }
        else{
          this.showError(response.mesagge);
        }
      });
   }

   showError(message: string) {
    this.messageService.add(
      {
        severity: 'error',
        summary: 'inventsoft Aviso',
        detail: message
      }
    );
  }

  showSuccess(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'inventsoft Aviso',
      detail: message
    });
  }
}
