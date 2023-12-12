
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, FormBuilder } from '@angular/forms';
import {ApiService} from '../../servicios/api/api.service'
import { ToastrService } from 'ngx-toastr';
import { MatSelectChange } from '@angular/material/select';


@Component({
  selector: 'app-vistas-seguimiento',
  templateUrl: './vistas-seguimiento.component.html',
  styleUrls: ['./vistas-seguimiento.component.scss']
})
export class VistasSeguimientoComponent {

  datosR: any[]=[]; datos: any[]=[]; Estados: any[]=[];

  form: FormGroup;

  id: string | undefined;

  RegId: any;

  Estado1: any;

  valorSeleccionado: string[] = [];
  valoresSeleccionados: string[] = [];

  Formulario = new FormGroup({
    Asunto : new FormControl('',Validators.required)
  })

  constructor(private api:ApiService, private fb: FormBuilder, private toastr: ToastrService,) {
    this.form =this.fb.group({
      
      
      Registro:['',Validators.required],
      Comentario:['',Validators.required],
      Estado:['',Validators.required],
      EstadoId:[''],
    })
  }
  /*ngOnInit almacena los get de los datos para mostrar*/
  ngOnInit(): void {
    this.api.getregistroA("Registro").subscribe((data) => {
     this.datosR = data;
    //  console.log(this.datosR)
    })
    this.api.getregistroA("Estados").subscribe((data2) => {
      this.Estados = data2;
      //console.log(this.datosR)
     })
   }
   FiltarSeguimiento(e: any){
    this.RegId= e.target.value;
    // console.log(this.RegId)
   }
   onMedio(e: any) {
    // console.log(e.target.value);
    this.RegId = e.target.value;

    this.api.getSeguimiento(this.RegId).subscribe((data) => {
      this.datos = data
      // console.log(data);
      //   console.log('Respuesta del servidor:', this.RegId);
        // Puedes realizar otras acciones después de recibir la respuesta
      
      },
      error => {
        // console.error('Error al enviar la solicitud:', error);
        // Puedes manejar el error aquí
      }
    )
    
  }
   GuardarRegistro(){
    //console.log(this.form);
    if (this.form.invalid === true){
      console.log("Perroloco");
      this.toastr.warning('Informacion invalida', 'Ingrese Informacion');
      return;
    }
    /* Se crea un objeto para almacenar */
    const Seguimiento: any = {
      registroId: this.form.get('Registro')?.value,
      seguimiento1:this.form.get('Comentario')?.value,
      Fecha: this.transformarFecha(new Date()),

    }
    // console.log(Seguimiento);
    this.api.GuardarSeguimiento(Seguimiento).subscribe(
      registro => {
        
        this.api.GuardarEstado(this.RegId, this.Estado1).subscribe(
          () => {
            console.log('Datos actualizados correctamente');
            // Puedes realizar acciones adicionales después de la actualización
          },
          error => {
            console.error('Error al actualizar datos', error);
          }
        );
        // console.log('Respuesta del servidor:', Seguimiento);
        // Puedes realizar otras acciones después de recibir la respuesta
        this.toastr.success('Registro  guardo correctamente', 'Registro se guardo');



      //  console.log(this.GuardarEstado);
      },
      error => {
        // console.error('Error al enviar la solicitud:', error);
        // Puedes manejar el error aquí
      }
    )
    // this.api.getSeguimiento(this.RegId.valorSeleccionado).subscribe((data) => {

    //   this.datos = data
    //   // console.log(data);
    //     // console.log('Respuesta del servidor2:', this.RegId);
    //     // Puedes realizar otras acciones después de recibir la respuesta
      
    //   },
    //   error => {
    //     // console.error('Error al enviar la solicitud:', error);
    //     // Puedes manejar el error aquí
    //   }
    // )
    this.form.reset();
  }
  transformarFecha(fecha: Date): Date {
    fecha.setMinutes(fecha.getMinutes() - fecha.getTimezoneOffset());
    return fecha;
  }

  GuardarEstado() {

    this.Estado1 = this.valorSeleccionado
    console.log(this.Estado1)
   
  }
  
//    GuardarEstado(RegId)
//      this.valorSeleccionado
//      const EstadoI: any = {
//        EstadoId: this.valorSeleccionado,
//      }
//      console.log(this.Estados)
//      this.api.GuardarEstado( this.RegId,this.valorSeleccionado).subscribe(data => 
//        this.form = dat
//      },
//      error => {
//        //console.error('Error al enviar la solicitud:', error);
//        //Puedes manejar el error aquí
//      }
//    )
//      if (this.id === undefined) {    
//      } else {    
     
//  // console.log(this.datosR)
//     }



}
