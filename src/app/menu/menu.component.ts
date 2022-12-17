import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menus: Array<any> = [
   

  ];
  menu: any=[];
  constructor(private dataService: DataService) {

    this.dataService.getMenu().subscribe(data => { this.menu = data })
    this.generarDatos()
  }
  generarDatos(){
    for (let m of this.menu) {
      this.menus.push({ nombre: m.n_nombre,categoria: "menu", precio: m.v_precio })
    }
  }

}
