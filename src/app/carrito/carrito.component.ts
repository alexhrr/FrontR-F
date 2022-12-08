import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
export interface CarritoCompras {
  foto: string;
  nombre: string;
  categoria: string;
  componentes: string;
  cantidad: number;
  precioU: number;
  precioT: number;
  boton: string;

}

const ELEMENT_DATA: CarritoCompras[] = [
  { foto: "", nombre: 'Hamburguesa', categoria: "Plato fuerte", componentes: "", cantidad: 2, precioU: 18000, precioT: 36000, boton: 'X' },
  { foto: "", nombre: 'Pizza', categoria: "Plato fuerte", componentes: "", cantidad: 4, precioU: 15000, precioT: 60000, boton: 'X' },
  { foto: "", nombre: 'Combo pollo frito', categoria: "Plato fuerte", componentes: "Pollo, papas y gaseosa", cantidad: 2, precioU: 30000, precioT: 60000, boton: 'X' }

];

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent {
  displayedColumns: string[] = ['Foto', 'Nombre', 'Categoria', 'Componentes', 'Cantidad', 'PrecioU', 'PrecioT'];
  dataSource = ELEMENT_DATA;
}
