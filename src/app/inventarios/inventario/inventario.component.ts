import { InventarioService } from './../services/inventario.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MenuComponent } from "../../componentes/menu/menu.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { response } from 'express';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MenuComponent,
    CommonModule,
    RouterOutlet,
    ToastModule,
    TableModule
],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css',
  providers: [ConfirmationService,MessageService]
})
export class InventarioComponent implements OnInit {

  constructor(
    private InventarioServices: InventarioService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ){

  }

  ngOnInit(): void {

    this.getProductos();
    this.getCategorias();

  }


  salidaForm: FormGroup = new FormGroup ({
    producto_salida: new FormControl('',[Validators.required]),
    cantidad_salida: new FormControl('',[Validators.required]),
    stock_salida: new FormControl({value: '', disabled:true},[Validators.required]),
    seccion_salida: new FormControl('',[Validators.required]),
    motivo_salida: new FormControl('',[Validators.required]),
    comentarios_salida: new FormControl('',[Validators.required]),
  });

  entradaForm: FormGroup = new FormGroup ({
    producto_entrada: new FormControl('',[Validators.required]),
    cantidad_entrada: new FormControl('',[Validators.required]),
    stock_entrada: new FormControl({value: '', disabled: true},[Validators.required]),
    seccion_entrada: new FormControl('',[Validators.required]),
    motivo_entrada: new FormControl('',[Validators.required]),
    comentarios_entrada: new FormControl('',[Validators.required]),
  });

  productoForm: FormGroup = new FormGroup ({
    categoria_productos: new FormControl('',[Validators.required]),
    nombre_productos: new FormControl('',[Validators.required]),
    barras_productos: new FormControl(''),
    medida_productos: new FormControl('',[Validators.required]),
    cantidad_productos: new FormControl('',[Validators.required]),
    precio_productos: new FormControl('',[Validators.required]),
    moneda_productos: new FormControl('',[Validators.required]),
    imagen_productos: new FormControl('',[Validators.required]),
    costo_productos: new FormControl('',[Validators.required]),
    stock_productos: new FormControl('',[Validators.required]),
    ecommerce_productos: new FormControl('',),
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

  get imagen_productos(): FormControl {
    return this.productoForm.get('imagen_productos') as FormControl;
  }

  get costo_productos(): FormControl {
    return this.productoForm.get('costo_productos') as FormControl;
  }

  get stock_productos(): FormControl {
    return this.productoForm.get('stock_productos') as FormControl;
  }

  get venta_productos(): FormControl {
    return this.productoForm.get('venta_productos') as FormControl;
  }

    getProducto: any [] = [];
    getProductos(){
      this.InventarioServices
          .getProductos()
          .subscribe((response: any) => {
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


   getProductoStock(){
    let codigo = this.entradaForm.get("producto_entrada")?.value;
      this.InventarioServices
          .getProductoStock(codigo)
          .subscribe((response: any) => {
            this.entradaForm.patchValue({
              stock_entrada: response.stock
            });
          })
   }

   getProductStock(){
    let codigo = this.salidaForm.get("producto_salida")?.value;
      this.InventarioServices
          .getProductStock(codigo)
          .subscribe((response: any) => {
            this.salidaForm.patchValue({
              stock_salida: response.stock
            });
          })
   }


   postAgregarProductos(){
    let crear : any =[
      {
      categoria: this.productoForm.get("categoria_productos")?.value,
      url_imagen: this.productoForm.get("imagen_productos")?.value,
      codigo_barras: this.productoForm.get("barras_productos")?.value,
      nombre: this.productoForm.get("nombre_productos")?.value,
      medida: this.productoForm.get("medida_productos")?.value,
      precio: this.productoForm.get("precio_productos")?.value,
      costo_proveedor: this.productoForm.get("costo_productos")?.value,
      moneda: this.productoForm.get("moneda_productos")?.value,
      descripcion: this.productoForm.get("descripcion_productos")?.value,
      stock: this.productoForm.get("stock_productos")?.value,
      cantidad: this.productoForm.get("cantidad_productos")?.value,
      producto_ecommerce: this.productoForm.get("ecommerce_productos")?.value,
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


   entradaKardex(){
    let crear: any = [
      {
      producto_entrada: this.entradaForm.get("producto_entrada")?.value,
      cantidad_entrada: this.entradaForm.get("cantidad_entrada")?.value,
      stock_entrada: this.entradaForm.get("stock_entrada")?.value,
      seccion_entrada: this.entradaForm.get("seccion_entrada")?.value,
      motivo_entrada: this.entradaForm.get("motivo_entrada")?.value,
      comentarios_entrada: this.entradaForm.get("comentarios_entrada")?.value,
      usuario: localStorage.getItem("usuario"),
      }
    ];
  this.InventarioServices
      .entradaKardex(crear)
      .subscribe((response: any) =>{
        if(response.status == 200){
          this.showSuccess(response.message);
          this.entradaForm.reset();
        }
        else{
          this.showError(response.message);
        }
      });
   }

   salidakardex(){
    let salida: any = [
      {
        id_producto: this.salidaForm.get('producto_salida')?.value,
        salida: this.salidaForm.get('cantidad_salida')?.value,
        stock_salida: this.salidaForm.get('stock_salida')?.value,
        sede: this.salidaForm.get('seccion_salida')?.value,
        motivo: this.salidaForm.get('motivo_salida')?.value,
        descripcion: this.salidaForm.get('comentarios_salida')?.value,
        usuario: localStorage.getItem('usuario'),
      }
    ];
    this.InventarioServices
        .salidakardex(salida)
        .subscribe((response: any)=>{
          if(response.status == 200){
            this.showSuccess(response.message);
            this.salidaForm.reset();
          }
          else{
            this.showError(response.message);
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
