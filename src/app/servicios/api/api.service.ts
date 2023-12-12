import { Injectable } from '@angular/core';
import {asuntos} from '../../modelos/asuntos.intarface'
import { Responsablesinterface } from '../../modelos/Responsables.interface';
import {EstadosInterface} from '../../modelos/Estados.interface';
import {registro} from '../../modelos/Registro';
import {Mediointerface} from '../../modelos/Medio.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import {registrodetalle} from '../../modelos/registrodetalle'
import { registroA } from 'src/app/modelos/RegistroA';
import { SeguimientoM } from 'src/app/modelos/SeguimientoM';
//import { ConsoleReporter } from 'jasmine';




@Injectable({
  providedIn: 'root'
})
export class ApiService {

 
  datos: any[]=[]; datosR:any[]=[]; datosM:any[]=[]; datosE:any[]=[]; registroD:any[]=[];



  url:string = "https://192.168.209.253:446/"
// https://localhost:7202/
// https://192.168.209.253:446/
  private httpHeaders =new HttpHeaders ({'content-Type': 'appplication/json'});
  
  
  Formulario = new FormGroup({
    asunto: new FormControl('',Validators.required)
  })


  constructor( private http:HttpClient) { }

    getasuntos(page:string):Observable<asuntos[]>{
      let direccion = this.url + "api/" + page;
      return this.http.get<asuntos[]>(direccion)
      
    }
    getremitente(page:string):Observable<Responsablesinterface[]>{
      let direccion = this.url + "api/" + page;

      return this.http.get<Responsablesinterface[]>(direccion)
      
    }
    getMedio(page:string):Observable<Mediointerface[]>{
      let direccion = this.url + "api/" + page;
      return this.http.get<Mediointerface[]>(direccion)
      
    }
    getCiudad(page:string):Observable<Mediointerface[]>{
      let direccion = this.url + "api/" + page;
      return this.http.get<Mediointerface[]>(direccion) 
    }

    getEstados(page:string):Observable<EstadosInterface[]>{
      let direccion = this.url + "api/" + page;
      return this.http.get<EstadosInterface[]>(direccion)
      
    }
    GuardarRegistro(registro: any): Observable<any> {
      return this.http.post(`${this.url}api/registro`, registro);
    }

    getRegistroDetalle(page:string):Observable<registrodetalle[]>{
      let direccion = this.url + "api/RegistroDetalle" + page;
      return this.http.get<registrodetalle[]>(direccion)
      
    }
    GuardarRegistroDetalle(registrodetalle: any): Observable<any> {
      return this.http.post(`${this.url}api/RegistroDetalle`, registrodetalle);
    }
    getregistroA(page:string):Observable<registroA[]>{
      let direccion = this.url + "api/" + page;
      return this.http.get<registroA[]>(direccion)
      
    }
    GuardarSeguimiento(registro: any): Observable<any> {
      return this.http.post(`${this.url}api/seguimiento`, registro);
    }
    getSeguimiento(page:number):Observable<SeguimientoM[]>{
      let direccion = this.url + "api/seguimiento/" +  page;
      return this.http.get<SeguimientoM[]>(direccion)
    }
    GuardarEstado(RegistroId: any, EstadoId: any): Observable<any> {
    const URL= `${this.url+"api/Registro"}/${RegistroId}`+'?EstadoId=' + EstadoId;
    return this.http.put(URL, EstadoId);
  }
  
}
