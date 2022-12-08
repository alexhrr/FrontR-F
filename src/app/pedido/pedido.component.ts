import { Component } from '@angular/core';

export interface CarritoCompras {
  id: number;
  direccion: string;
  fecha: string;
  monto: number;
 
}

const ELEMENT_DATA: CarritoCompras[] = [
  { id: 1, direccion: 'Juan rey', fecha: "08 diciembre", monto: 50000},
  { id: 2, direccion: 'Fontibon', fecha: "10 diciembre", monto: 80000},
  { id: 3, direccion: 'Olaya', fecha: "15 diciembre", monto: 40000},

];


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  displayedColumns: string[] = ['Id', 'Direccion', 'Fecha', 'Monto', 'Detalle'];
  dataSource = ELEMENT_DATA;
}
