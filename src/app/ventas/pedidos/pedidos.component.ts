import { Component } from '@angular/core';
import { MenuComponent } from "../../componentes/menu/menu.component";

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {

}
