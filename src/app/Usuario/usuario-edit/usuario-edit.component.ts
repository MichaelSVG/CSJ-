import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, FormBuilder } from '@angular/forms';
import {ApiService} from '../../servicios/api/api.service'

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.scss']
})
export class UsuarioEditComponent{

  datosR: any[]=[]; datos: any[]=[];

  form: FormGroup;

  id: string | undefined;

  Formulario = new FormGroup({
    Asunto : new FormControl('',Validators.required)
  })

  constructor(private api:ApiService, private fb: FormBuilder) {
    this.form =this.fb.group({
      
      
      Registro:[''],
      Comentario:[''],
     

    })
  }
  ngOnInit(): void {
    this.api.getregistroA("Registro").subscribe((data) => {
     this.datosR = data;
     console.log(this.datosR)
    })

   }
   FiltarSeguimiento(id:number){
    this.api.getSeguimiento(id).subscribe();
   }


   GuardarRegistro(){
    //console.log(this.form);

    const Seguimiento: any = {
      registroId: this.form.get('Registro')?.value,
      seguimiento1:this.form.get('Comentario')?.value,
      fecha: this.transformarFecha(new Date()),
    }
    console.log(Seguimiento);
    this.api.GuardarSeguimiento(Seguimiento).subscribe(
      registro => {
        console.log('Respuesta del servidor:', Seguimiento);
        // Puedes realizar otras acciones después de recibir la respuesta

        this.id=registro['id'];
        console.log(this.id);

      },
      error => {
        // console.error('Error al enviar la solicitud:', error);
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
