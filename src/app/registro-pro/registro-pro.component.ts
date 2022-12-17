import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-registro-pro',
  templateUrl: './registro-pro.component.html',
  styleUrls: ['./registro-pro.component.css']
})
export class RegistroProComponent {
  ingredientes: any = [];
  categorias: any = [];
  idProducto: any = 0;
  constructor(private dataService: DataService) {
    this.dataService.getIngredientes().subscribe(data => { this.ingredientes = data })
    this.dataService.getCategoria().subscribe(data => { this.categorias = data })
  }

  registro(producto: any, cat: any, precio: any, cantidad: any, ing: any, personalizable: any) {

    this.dataService.setProductos({ nombre: producto.value, unidades: cantidad.value, personalizable: personalizable.value, precio: precio.value, categoria: cat.value }).subscribe(data => { this.idProducto = data })
    this.dataService.setProductoIngrediente({ cantidad: 1, id_ing: ing.value, id_prod: this.idProducto }).subscribe()
  }

}
