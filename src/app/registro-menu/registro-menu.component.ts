import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-registro-menu',
  templateUrl: './registro-menu.component.html',
  styleUrls: ['./registro-menu.component.css']
})
export class RegistroMenuComponent {
  productos: any = []
  entradas: any = []
  platosfuertes: any = []
  bebidas: any = []
  postres: any = []

  constructor(private dataService: DataService) {

    this.dataService.getProductos().subscribe(data => { this.productos = data })
    for (let producto of this.productos) {
      if (producto.fkIdcategoria.pk_idCategoria == 1) {
        this.entradas.push(producto)
      } else if (producto.fkIdcategoria.pk_idCategoria == 2) {
        this.platosfuertes.push(producto)
      } else if (producto.fk_idcategoria.pk_idCategoria == 3) {
        this.bebidas.push(producto)
      } else if (producto.fk_idcategoria.pk_idCategoria == 4) {
        this.postres.push(producto)
      }

    }
  }
  registro(nombre: any, entrada: any, platofuerte: any, bebida: any, postre: any, precio: any, personalizable: String) {
    this.dataService.setMenu({
      "n_nombre": nombre,
      "v_personalizable": personalizable == "true",
      "v_precio": precio,
      "productos": [
        entrada, platofuerte, bebida, postre

      ]
    }).subscribe()
  }

}
