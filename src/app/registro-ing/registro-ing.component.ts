import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Ingrediente } from 'src/app/ingrediente';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro-ing',
  templateUrl: './registro-ing.component.html',
  styleUrls: ['./registro-ing.component.css']
})
export class RegistroIngComponent {

  unidades: any = [];
  constructor(private dataService: DataService) {
    this.dataService.getUnidades().subscribe(data => { this.unidades = data })
  }


  registro(igr: string, cant: any, unidad: any) {

    this.dataService.setIngredientes({
      "q_unidades": cant,
      "fk_idUnidad": { "pk_idUnidad": unidad },
      "n_nombre": igr
    }).subscribe(ingredienteData => {
      Swal.fire({ icon: 'success', text: "Se agregó el ingrediente" }) 
      console.log(ingredienteData)
    })

  }
}
