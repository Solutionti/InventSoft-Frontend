import { Component } from '@angular/core';
import { FooterComponent } from "../../componentes/footer/footer.component";
import { MenutiendaComponent } from "../../componentes/menutienda/menutienda.component";

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [FooterComponent, MenutiendaComponent],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {

}
