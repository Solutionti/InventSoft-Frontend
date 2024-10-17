import { CommonModule } from '@angular/common';
import { VentaService } from './../services/venta.service';
import { Component } from '@angular/core';
import { MenuComponent } from "../../componentes/menu/menu.component";
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [
    MenuComponent,
    CommonModule,
    TableModule,
    RouterModule,
  ],

  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {

  constructor(
    private VentaService: VentaService,
  ){}

  ngOnInit(): void {

    this.getPedido();
  }

  getPedid: any [] = [];
  getPedido(){
    this.VentaService
        .getPedido()
        .subscribe((response: any)=>{
          this.getPedid = response
        })
  }

}
