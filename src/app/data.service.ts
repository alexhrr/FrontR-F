import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingrediente } from 'src/app/ingrediente';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

  }

  getUnidades() {
    return this.http.get('http://localhost:8090/tipoUnidad')
  }

  getIngredientes(){
    return this.http.get('http://localhost:8090/ingrediente')
  }

  getProductos(){
    return this.http.get('http://localhost:8090/producto')
  }
  
  getMenu(){
    return this.http.get('http://localhost:8090/menu')
  }

  getCliente(){
    return this.http.get('http://localhost:8090/cliente')
  }

  getPedido(){
    return this.http.get('http://localhost:8090/pedido')
  }

  getRestaurante(){
    return this.http.get('http://localhost:8090/Restaurante')
  }
  getCategoria(){
    return this.http.get('http://localhost:8090/categoriaProducto')
  }

  getFoto(id: any){
    return this.http.get('http://localhost:8090/database-files/'+ id)
  }

  setProductos(producto: any):any{
    return this.http.post('http://localhost:8090/producto', producto)
  }
  
  setMenu(menu: any){
    return this.http.post('http://localhost:8090/menu', menu)
  }

  setCliente(cliente: any){
    return this.http.post('http://localhost:8090/cliente', cliente)
  }

  setPedido(pedido: any){
    return this.http.post('http://localhost:8090/pedido', pedido)
  }

  setRestaurante(restaurante: any){
    return this.http.post('http://localhost:8090/Restaurante', restaurante)
  }

  setIngredientes(ingrediente: any) {
    return this.http.post('http://localhost:8090/ingrediente', ingrediente)
  }

  setProductoIngrediente(productoingrediente: any) {
    return this.http.post('http://localhost:8090/productoIngrediente', productoingrediente)
  }

  setProductoMenu(productomenu: any) {
    return this.http.post('http://localhost:8090/productoMenu', productomenu)
  }
  setFoto(id: any, foto: any) {
    return this.http.post('http://localhost:8090/producto/foto/'+id, foto)
  }
}
