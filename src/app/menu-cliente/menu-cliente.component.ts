import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.css']
})
export class MenuClienteComponent {
  menus: any = [];
  productos: any = [];

  constructor(private dataService: DataService) {

    this.dataService.getMenu().subscribe(data => { this.menus = data })
    this.dataService.getProductos().subscribe(data => { this.productos = data })

  }
}
