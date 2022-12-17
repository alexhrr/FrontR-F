import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usu',
  templateUrl: './registro-usu.component.html',
  styleUrls: ['./registro-usu.component.css']
})
export class RegistroUsuComponent {
  hide = true
  constructor(private router: Router, private dataService: DataService) {

  }

  registro(nombre: any, tipo: any, email: any, telefono: any, pass: any, passc: any) {
    if (tipo == "cliente") {
      this.dataService.setCliente({
        "n_nombre": nombre,
        "n_celular": telefono,
        "n_correo": email,
        "p_contrasenia": pass,
      }).subscribe()
      this.router.navigate(['/menu-cliente'])
    } else {
      this.dataService.setRestaurante({
        "n_nombre": nombre,
        "n_telefono": telefono,
        "n_correo": email,
        "p_contrasenia": pass,

      }).subscribe()
      this.router.navigate(['/menu-restaurante'])
    }
  }
}


