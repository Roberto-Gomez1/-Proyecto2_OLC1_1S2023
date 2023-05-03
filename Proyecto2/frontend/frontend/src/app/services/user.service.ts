import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Errores } from '../components/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _errores:Array<Errores> = new Array();
  URL = "http://localhost:8080"
  constructor( private http:HttpClient) { }

  probando(){
    return this.http.get(`${this.URL}/usuario`);
  }

  // errores(){
  //   return this.http.get(`${this.URL}/errores`);
  // }

  setdata(json:any){
    return this.http.post(`${this.URL}/prueba`,json);
  }

  seterrores(json:any){
    return this.http.post(`${this.URL}/prueba/errores`, json);
  }

  probandoerrores(){
    return this.http.get(`${this.URL}/prueba/errores`);
    
  }

}
