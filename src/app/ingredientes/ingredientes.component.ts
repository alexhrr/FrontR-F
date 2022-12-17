import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent {
  ingredientes: any = [];
  constructor(private dataService: DataService) {

    this.dataService.getIngredientes().subscribe(data => { this.ingredientes = data })

  }

  displayedColumns: string[] = ['Nombre', 'Cantidad', 'Unidades'];

}
