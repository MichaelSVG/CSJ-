import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, FormBuilder } from '@angular/forms';
import {ApiService} from '../../servicios/api/api.service'




@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.scss']
})
export class UsuarioCreateComponent implements OnInit{

postregistro() {
throw new Error('Method not implemented.');
}
datos: any[]=[]; datosR: any[]=[]; datosM: any[]=[]; datosE: any[]=[]; registroD:any[]=[];  



form: FormGroup;

id: string | undefined;




  Formulario = new FormGroup({

    Asunto : new FormControl('',Validators.required)


  })

  constructor(private api:ApiService, private fb: FormBuilder) {
    this.form =this.fb.group({

      Remitente:[''],
      Asunto:[''],
      Medio:[''],
      Registro:[''],
      Fecha:[''],
      responsableId:[''],
      FechaRegistro: [''],
      
    })
    

  }

  ngOnInit(): void {
   this.api.getasuntos("asuntos").subscribe((data) => {
    this.datos = data;
   })

   this.api.getremitente("responsables").subscribe((data) => {
    this.datosR = data;
   })

   this.api.getMedio("medios").subscribe((data) => {
    this.datosM = data;
   })

   this.api.getMedio("Estados").subscribe((data) => {
    this.datosE = data;
   })

  }
  GuardarRegistro(){
    //console.log(this.form);

    const registro: any = {
      RemitenteId: this.form.get('Remitente')?.value,
      AsuntoId: this.form.get('Asunto')?.value,
      MedioId: this.form.get('Medio')?.value,
      Nota: this.form.get('Registro')?.value,
      Fecha: this.form.get('Fecha')?.value,
      FechaRegistro: this.transformarFecha(new Date()),
      EstadoId:1,
    }
    console.log(registro);
    this.api.GuardarRegistro(registro).subscribe(
      registro => {
        console.log('Respuesta del servidor:', registro);
        // Puedes realizar otras acciones después de recibir la respuesta

        this.id=registro['id'];
        this.GuardarRegistroDetalle();
        console.log(this.id);
      },
      error => {
        console.error('Error al enviar la solicitud:', error);
        // Puedes manejar el error aquí
      }
    )
    this.form.reset();


  }
  GuardarRegistroDetalle(){
  

    const registrodetalle: any = {
      RegistroId: this.id,
      responsableId: this.form.get('Responsables')?.value,
      //ResponsableId: 1,
 }
   console.log(registrodetalle);
    this.api.GuardarRegistroDetalle(registrodetalle).subscribe(
      registrodetalle => {
        console.log('Respuesta del servidor:', registrodetalle);
        // Puedes realizar otras acciones después de recibir la respuesta
  
        console.log(this.id);
      },
      error => {
        console.error('Error al enviar la solicitud:', error);
        // Puedes manejar el error aquí
      }
    )
    this.form.reset();


  }
  transformarFecha(fecha: Date): Date {
    fecha.setMinutes(fecha.getMinutes() - fecha.getTimezoneOffset());
    return fecha;
  }
}

