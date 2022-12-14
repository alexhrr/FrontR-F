import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {

  }

  Ingresar(tipo: any, nombre: any, pass: any) {
    if (tipo.value == "cliente") {
      this.router.navigate(['/menu-cliente'])
    }
    else{
      this.router.navigate(['/menu'])
    }
    //aqui se debe validar el usuario y contraseña en la base de datos
       
    return false
  }

}

