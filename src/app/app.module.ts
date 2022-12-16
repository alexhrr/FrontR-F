import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { RegistroUsuComponent } from './registro-usu/registro-usu.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { RegistroIngComponent } from './registro-ing/registro-ing.component';
import { RegistroProComponent } from './registro-pro/registro-pro.component';
import { MatRadioModule } from '@angular/material/radio';
import { RegistroMenuComponent } from './registro-menu/registro-menu.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import { MatTableModule } from '@angular/material/table';
import { ListadoComponent } from './listado/listado.component';
import { ProductosComponent } from './productos/productos.component';
import { MatCardModule } from '@angular/material/card';
import { CarritoComponent } from './carrito/carrito.component';
import { PedidoComponent } from './pedido/pedido.component';
import { MenuClienteComponent } from './menu-cliente/menu-cliente.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    RegistroUsuComponent,
    RegistroIngComponent,
    RegistroProComponent,
    RegistroMenuComponent,
    IngredientesComponent,
    ListadoComponent,
    ProductosComponent,
    CarritoComponent,
    PedidoComponent,
    MenuClienteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatCardModule,
    MatExpansionModule,
    HttpClientModule,

  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
