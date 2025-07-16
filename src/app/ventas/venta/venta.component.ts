import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../../componentes/menu/menu.component";
import { InventarioService } from '../../inventarios/services/inventario.service';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-venta',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MenuComponent,
    CommonModule,
    TableModule],
  templateUrl: './venta.component.html',
  styleUrl: './venta.component.css'
})
export class VentaComponent implements OnInit {

  constructor(
    private InventarioServices: InventarioService,
  ) {

  }

  ngOnInit(): void {
    this.getProductos();
  }

  getProducto: any [] = [];
   getProductos(){
      this.InventarioServices
          .getProductos()
          .subscribe((response: any) => {
          this.getProducto = response;
         })
   }

}
