import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
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

  constructor(){

  }

  ngOnInit(): void {

  }

  salidaForm = new FormGroup ({


  });

  entradaForm = new FormGroup ({


  });

  productoForm = new FormGroup ({


  });





}
