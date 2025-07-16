import { InventarioService } from './../services/inventario.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MenuComponent } from "../../componentes/menu/menu.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MenuComponent,
    CommonModule,
    RouterOutlet,
    ToastModule,
    TableModule,
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
    private sanitizer: DomSanitizer,
  ){
    this.spinner = false;
  }

  ngOnInit(): void {
    this.spinner = false;
    this.getProductos();
    this.getCategorias();
    this.spinner = true;
  }

  spinner = false;

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
    medida_productos: new FormControl('Unidades',[Validators.required]),
    cantidad_productos: new FormControl('1',[Validators.required]),
    precio_productos: new FormControl('',[Validators.required]),
    moneda_productos: new FormControl('PEN',[Validators.required]),
    imagen_productos: new FormControl(''),
    costo_productos: new FormControl('',[Validators.required]),
    stock_productos: new FormControl('0',[Validators.required]),
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
    this.spinner = false;
    // DECLARACION DE VARIABLES INDIVIDUALES
    let url_imagen =  this.productoForm.get("imagen_productos")?.value,
     categoria: any =  this.productoForm.get("categoria_productos")?.value,
     codigo_barras: any =  this.productoForm.get("barras_productos")?.value,
     nombre: any =  this.productoForm.get("nombre_productos")?.value,
     medida: any =  this.productoForm.get("medida_productos")?.value,
     precio: any =  this.productoForm.get("precio_productos")?.value,
     costo_proveedor: any =  this.productoForm.get("costo_productos")?.value,
     moneda: any =  this.productoForm.get("moneda_productos")?.value,
     descripcion: any =  this.productoForm.get("descripcion_productos")?.value,
     stock: any =  this.productoForm.get("stock_productos")?.value,
     cantidad: any =  this.productoForm.get("cantidad_productos")?.value,
     producto_ecommerce: any =  this.productoForm.get("ecommerce_productos")?.value;
     let ecommerceAct: any  = "";
     let usuario: any  = localStorage.getItem('usuario');
     try {
      const formdata = new FormData();

      formdata.append('categoria', categoria);
      formdata.append('codigo_barras', codigo_barras);
      formdata.append('nombre', nombre);
      formdata.append('medida', medida);
      formdata.append('precio', precio);
      formdata.append('costo_proveedor', costo_proveedor);
      formdata.append('moneda', moneda);
      formdata.append('descripcion', descripcion);
      formdata.append('stock', stock);
      formdata.append('cantidad', cantidad);
      formdata.append('usuario', usuario);

      if(producto_ecommerce == true ) {
        ecommerceAct = 1;
      }
      else {
        ecommerceAct = 0;
      }
      formdata.append('producto_ecommerce', ecommerceAct);
      this.imagen1.forEach((element: any ) => {
        formdata.append('url_imagen', this.imagen1[0]);
      });

      this.InventarioServices
          .postAgregarProductos(formdata)
          .subscribe((response: any)=> {
            if(response.status == 200){
              this.showSuccess(response.message);
              this.productoForm.reset();
              this.getProductos();
              this.spinner = true;
            }
            else{
              this.showError(response.message);
              this.spinner = true;
            }
          });
     }
     catch(e) {

     }
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
       stockact: (this.entradaForm.get("cantidad_entrada")?.value + this.entradaForm.get("stock_entrada")?.value)
      }
    ];

  this.InventarioServices
      .entradaKardex(crear)
      .subscribe((response: any) =>{
        if(response.status == 200){
          this.showSuccess(response.message);
          this.entradaForm.reset();
          this.getProductos();
        }
        else{
          this.showError(response.message);
        }
      });
   }

   salidakardex(){
    //creo un array
    let salida: any = [
      {
        //con esto atrapo los datos que ingresan al formulario
        id_producto: this.salidaForm.get('producto_salida')?.value,
        salida: this.salidaForm.get('cantidad_salida')?.value,
        stock_salida: this.salidaForm.get('stock_salida')?.value,
        sede: this.salidaForm.get('seccion_salida')?.value,
        motivo: this.salidaForm.get('motivo_salida')?.value,
        descripcion: this.salidaForm.get('comentarios_salida')?.value,
        usuario: localStorage.getItem('usuario'),
        stockActualizar: (this.salidaForm.get('stock_salida')?.value - this.salidaForm.get('cantidad_salida')?.value)
      }
    ];
    this.InventarioServices
        .salidakardex(salida)
        .subscribe((response: any)=>{
          if(response.status == 200){
            this.showSuccess(response.message);
            this.salidaForm.reset();
            this.getProductos();
          }
          else{
            this.showError(response.message);
          }
        });
  }

  public imagen1: any = [];
  previsualizacion: string = "";
  capturareImagen(e: any ) {
    const imagen =  e.target as HTMLInputElement;
    const archivo = e.target.files[0];

    this.extraerBase64(archivo).then((imagen: any ) => {
      this.previsualizacion = imagen.base;
    });

    this.imagen1.push(archivo);
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
  extraerBase64 = async($event: any ) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
    }
    catch (e) {
    }
  });

  showSuccess(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'inventsoft Aviso',
      detail: message
    });
  }

  getProductoModal(producto: any ) {
    this.previsualizacion = producto.url_imagen;

    this.productoForm.patchValue({
      categoria_productos: producto.categoria,
      nombre_productos: producto.nombre,
      barras_productos: producto.codigo_barras,
      medida_productos: producto.medida,
      cantidad_productos: "1",
      precio_productos: producto.precio,
      moneda_productos: producto.moneda,
      costo_productos: producto.costo_proveedor,
      stock_productos: producto.stock,
      descripcion_productos: producto.descripcion,
    });
  }

  
}
