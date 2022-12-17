import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menus: any = [];
  constructor(private dataService: DataService) {

    this.dataService.getMenu().subscribe(data => { this.menus = data })

  }

}
