import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-registro-usu',
  templateUrl: './registro-usu.component.html',
  styleUrls: ['./registro-usu.component.css']
})
export class RegistroUsuComponent {
  hide = true
  constructor(private dataService: DataService) {
    
  }

  registro(nombre: any, tipo: any, email: any, telefono: any, pass:any, passc:any){
    if(tipo.value == "cliente"){
      this.dataService.setCliente({nombre: nombre.value, telefono: telefono.value, email: email.value, pass: pass.value}).subscribe()
    } else{
      this.dataService.setRestaurante({nombre: nombre.value, telefono: telefono.value, email: email.value, pass: pass.value}).subscribe()
    }    
  }
}


