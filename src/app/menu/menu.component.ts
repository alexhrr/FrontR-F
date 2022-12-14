import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menus: Array<any> = [
    { nombre: "Hamburguesa con CocaCola", categoria: "Menú", precio: 24000 },
    { nombre: "Hamburguesa con Limonada", categoria: "Menú", precio: 26000 },
    { nombre: "Tres leches y brownie", categoria: "Menú", precio: 5000 },
    { nombre: "Pizza con Pepsi", categoria: "Menú", precio: 18000 },
    { nombre: "Brownie con Helado", categoria: "Menú", precio: 9000 },
    { nombre: "Salchipapa con Limonada", categoria: "Menú", precio: 17000 },
    { nombre: "Pollo asado con papas y Pepsi", categoria: "Menú", precio: 35000 },

  ];
}
