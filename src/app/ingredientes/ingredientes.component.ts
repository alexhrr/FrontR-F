import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

export interface PeriodicElement {
  nombre: string;
  cantidad: number;
  unidades: String;
}

const ELEMENT_DATA: PeriodicElement[] = [];


@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent {
  ingredientes: any = [];
  unidades: any = [];
  constructor(private dataService: DataService) {

    this.dataService.getIngredientes().subscribe(data => { this.ingredientes = data })
    this.generarDatos()

    this.dataService.getUnidades().subscribe(data => { this.unidades = data })
  }

  displayedColumns: string[] = ['Nombre', 'Cantidad', 'Unidades'];
  dataSource = this.ingredientes;
  generarDatos() {
    for (let ingrediente of this.ingredientes) {
      ELEMENT_DATA.push({ nombre: ingrediente.n_nombre, cantidad: ingrediente.q_unidades, unidades: this.obtenerUnidades(ingrediente.fkIdunidad) })
    }
  }

  obtenerUnidades(x: any) {
    for (let unidad of this.unidades) {
      if (unidad.id == x) {
        return unidad.nombre
      }
    }
  }
}
