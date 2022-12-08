import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegistroUsuComponent } from './registro-usu/registro-usu.component';
import { RegistroIngComponent } from './registro-ing/registro-ing.component';
import { RegistroProComponent } from './registro-pro/registro-pro.component';
import { RegistroMenuComponent } from './registro-menu/registro-menu.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PedidoComponent } from './pedido/pedido.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'registro-usuario', component: RegistroUsuComponent },
  { path: 'registro-ingrediente', component: RegistroIngComponent },
  { path: 'registro-producto', component: RegistroProComponent },
  { path: 'registro-menu', component: RegistroMenuComponent },
  { path: 'ingredientes', component: IngredientesComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'pedido', component: PedidoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
