import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-pro',
  templateUrl: './registro-pro.component.html',
  styleUrls: ['./registro-pro.component.css']
})
export class RegistroProComponent {
  ingredientes: any = [];
  categorias: any = [];
  idProducto: any = null;
  formData = new FormData();

  constructor(private dataService: DataService) {
    this.dataService.getIngredientes().subscribe(data => { this.ingredientes = data })
    this.dataService.getCategoria().subscribe(data => { this.categorias = data })
    
  }

  registro(producto: any, cat: any, precio: any, cantidad: any, ing: any, personalizable: String, foto: any) {

    this.dataService.setProductos({
      "n_nombre": producto,
      "q_unidades": cantidad,
      "i_personalizable": personalizable == "true",
      "v_precio": precio,
      "fk_idCategoria": { "pk_idCategoria": cat },

    }).subscribe((data: { [x: string]: any; }) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto agregado',
        showConfirmButton: false,
        timer: 2000
      })
      this.idProducto = data["pk_idProducto"]
      this.dataService.setFoto(this.idProducto, this.formData).subscribe()
    })

    //this.dataService.setProductoIngrediente({ cantidad: 1, id_ing: ing.value, id_prod: this.idProducto }).subscribe()

  }
  onChange(event: any) {


    if (event != undefined) {
      let file = event.files[0];

      this.formData.append('file', file)

    }
  }
}
