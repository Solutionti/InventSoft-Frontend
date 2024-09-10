import { Component } from '@angular/core';
import { MenuComponent } from "../../componentes/menu/menu.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
