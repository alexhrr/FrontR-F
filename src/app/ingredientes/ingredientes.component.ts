import { Component } from '@angular/core';

export interface PeriodicElement {
  nombre: string;
  cantidad: number;
  unidades: String;
  }

const ELEMENT_DATA: PeriodicElement[] = [
  { nombre: 'Tomate', cantidad: 50, unidades: 'unidad' },  
  { nombre: 'Cebolla', cantidad: 50, unidades: 'Gramos' },  
  { nombre: 'Lechuga', cantidad: 25, unidades: 'unidad' },  
  { nombre: 'Queso', cantidad: 20, unidades: 'Libras' },  
  { nombre: 'Jamón', cantidad: 20, unidades: 'Libras' },  
  { nombre: 'Pan', cantidad: 50, unidades: 'unidad' },  
  { nombre: 'Carne', cantidad: 50, unidades: 'Libras' },  
  { nombre: 'Pollo', cantidad: 50, unidades: 'Libras' },  

];

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent {
  displayedColumns: string[] = ['Nombre', 'Cantidad', 'Unidades'];
  dataSource = ELEMENT_DATA;
  
}
