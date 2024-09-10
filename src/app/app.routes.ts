import { InventarioComponent } from './inventarios/inventario/inventario.component';
import { Routes } from '@angular/router';
import { ReporteComponent } from './reportes/reporte/reporte.component';
import { IniciarsesionComponent } from './seguridad/iniciarsesion/iniciarsesion.component';
import { InicioComponent } from './seguridad/inicio/inicio.component';
import { UsuariosComponent } from './seguridad/usuarios/usuarios.component';
import { ComprasComponent } from './ventas/compras/compras.component';
import { PedidosComponent } from './ventas/pedidos/pedidos.component';
import { ProveedoresComponent } from './ventas/proveedores/proveedores.component';
import { VentaComponent } from './ventas/venta/venta.component';

export const routes: Routes = [
  {
    path: '',
    component: IniciarsesionComponent,
  },
  {
    path: 'inventarios',
    component: InventarioComponent,
  },
  {
    path: 'reportes',
    component: ReporteComponent,
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
  },
  {
    path: 'compras',
    component: ComprasComponent,
  },
  {
    path: 'pedidos',
    component: PedidosComponent,
  },
  {
    path: 'proveedores',
    component: ProveedoresComponent,
  },
  {
    path: 'venta',
    component: VentaComponent,
  },
];
