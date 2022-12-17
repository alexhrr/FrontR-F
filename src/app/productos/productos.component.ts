import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})



export class ProductosComponent {
  productos: Array<any> = [];
  prod: any = [];
  categorias: any = [];
  constructor(private dataService: DataService) {

    this.dataService.getProductos().subscribe(data => { this.prod = data })
    this.dataService.getCategoria().subscribe(data => { this.categorias = data })
    this.generarDatos()
  }

  generarDatos() {
    for (let producto of this.prod) {
      this.productos.push({ nombre: producto.n_nombre,categoria: this.obtenerCategorias(producto.fk_idcategoria), precio: producto.v_precio })
    }
  }
  obtenerCategorias(x: any) {
    for (let categoria of this.categorias) {
      if (categoria.pk_idcategoria == x) {
        return categoria.n_nombre
      }
    }
  }
}
