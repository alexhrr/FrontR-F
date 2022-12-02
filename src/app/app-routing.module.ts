import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegistroUsuComponent } from './registro-usu/registro-usu.component';
import { RegistroIngComponent } from './registro-ing/registro-ing.component';
import { RegistroProComponent } from './registro-pro/registro-pro.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'menu',component:MenuComponent},
  {path:'registro-usuario',component:RegistroUsuComponent},
  {path:'registro-ingrediente',component:RegistroIngComponent},
  {path:'registro-producto',component:RegistroProComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
