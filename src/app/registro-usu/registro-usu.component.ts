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

  registro(nombre: any, tipo: any, email: any, telefono: any, pass: any, passc: any) {
    alert(nombre + telefono + email + pass + tipo)
    if (tipo == "cliente") {
      alert('Soy un Cliente')
      this.dataService.setCliente({
        "n_nombre": nombre,
        "n_celular": telefono,
        "n_correo": email,
        "p_contrasenia": pass,
      }).subscribe()
    } else {
      alert('Soy un Restaurante')
      this.dataService.setRestaurante({

        "n_nombre": nombre,
        "n_telefono": telefono,
        "n_correo": email,
        "p_contrasenia": pass,

      }).subscribe()
    }
  }
}


