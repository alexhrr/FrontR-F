import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-registro-menu',
  templateUrl: './registro-menu.component.html',
  styleUrls: ['./registro-menu.component.css']
})
export class RegistroMenuComponent {
  productos:any=[]
  entradas: Array<any> = []
  platosfuertes: Array<any> = []
  bebidas: Array<any> = []
  postres: Array<any> = []
  
  constructor(private dataService: DataService) {
  
   this.dataService.getProductos().subscribe(data=>{this.productos=data})
   for (let producto of this.productos){
    if(producto.fkIdcategoria ==1){
      this.entradas.push(producto)
    }else if(producto.fkIdcategoria ==2){
      this.platosfuertes.push(producto)
    }else if (producto.fk_idcategoria==3){
      this.bebidas.push(producto)
    }else if (producto.fk_idcategoria==4){
      this.postres.push(producto)
    }

   }
  }
  registro(nombre: any, entrada: any, platofuerte: any, bebida:any, postre:any, precio:any, personalizable:any){
    this.dataService.setMenu({nombre: nombre.value, personalizable: personalizable.value, precio: precio.value}).subscribe()
  }

}
