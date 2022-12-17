import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  clientes: any = [];
  restaurantes: any = [];
  constructor(private router: Router, private dataService: DataService) {
    this.dataService.getCliente().subscribe(data => { this.clientes = data })
    this.dataService.getRestaurante().subscribe(data => { this.restaurantes = data })
  }

  Ingresar(tipo: any, nombre: any, pass: any) {
    if (tipo == "cliente") {
      for (let cliente of this.clientes) {
        if (cliente.n_correo == nombre && cliente.p_contrasenia == pass) {
          this.router.navigate(['/menu-cliente'])
        }
      }
      
    }
    else {
      for (let restaurante of this.restaurantes) {
        if (restaurante.n_correo == nombre && restaurante.p_contrasenia == pass) {
          this.router.navigate(['/menu-restaurante'])
        }
      }
      

    }


    return false
  }

}

