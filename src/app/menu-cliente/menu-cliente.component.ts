import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.css']
})
export class MenuClienteComponent {
  menus: Array<any> = [
    { nombre: "Hamburguesa con CocaCola", categoria: "Menú", precio: 24000 },
    { nombre: "Hamburguesa con Limonada", categoria: "Menú", precio: 26000 },
    { nombre: "Tres leches y brownie", categoria: "Menú", precio: 5000 },
    { nombre: "Pizza con Pepsi", categoria: "Menú", precio: 18000 },
    { nombre: "Brownie con Helado", categoria: "Menú", precio: 9000 },
    { nombre: "Salchipapa con Limonada", categoria: "Menú", precio: 17000 },
    { nombre: "Pollo asado con papas y Pepsi", categoria: "Menú", precio: 35000 },

  ];

  productos: Array<any> = [
    { nombre: "CocaCola", categoria: "Bebida", precio: 5000 },
    { nombre: "Hamburguesa", categoria: "Plato Fuerte", precio: 20000 },
    { nombre: "Tres leches", categoria: "Postre", precio: 5000 },
    { nombre: "Pizza", categoria: "Plato fuerte", precio: 16000 },
    { nombre: "Brownie", categoria: "Postre", precio: 6000 },
    { nombre: "Limonada", categoria: "Bebida", precio: 7000 },
    { nombre: "Pollo asado", categoria: "Plato fuerte", precio: 30000 },


  ];
}
