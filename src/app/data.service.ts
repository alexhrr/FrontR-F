import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingrediente } from 'src/app/ingrediente';
import { HttpClientService } from '../../../service/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private httpClientService: HttpClientService) {

  }

  getData() {
    return this.http.get('http://localhost:8090/tipoUnidad')
  }

  setData(ingrediente: Ingrediente) {
    alert(ingrediente.cantidad)
    return this.http.post<Ingrediente>('http://localhost:8090/ingrediente/newingredient', ingrediente)
    
  }
}
