import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Ingrediente } from 'src/app/ingrediente';

@Component({
  selector: 'app-registro-ing',
  templateUrl: './registro-ing.component.html',
  styleUrls: ['./registro-ing.component.css']
})
export class RegistroIngComponent {
  
  unidades: any = [];
  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => { this.unidades = data })
  }


  registro(igr: string, cant: any, unidad: any) {
    alert(igr + cant + unidad)
    this.dataService.setData({id:igr, cantidad: cant, idunidad: unidad, nombre: igr }).subscribe(ingredienteData => { console.log(ingredienteData) })
    
  }
}
