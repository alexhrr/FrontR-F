import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})



export class ProductosComponent {
  productos: Array<any> = [
    { nombre: "CocaCola", categoria: "Bebida", precio: 5000 },
    { nombre: "Hamburguesa", categoria: "Plato Fuerte", precio: 20000 },
    { nombre: "Tres leches", categoria: "Postre", precio: 5000 },
    { nombre: "Pizza", categoria: "Plato fuerte", precio: 16000 },
    { nombre: "Brownie", categoria: "Postre", precio: 6000 },
    { nombre: "Limonada", categoria: "Bebida", precio: 7000 },
    { nombre: "Pollo asado", categoria: "Plato fuerte", precio: 30000 },


  ];

  constructor() {

  }

}
