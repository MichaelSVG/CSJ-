import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, FormBuilder } from '@angular/forms';
import {ApiService} from '../../servicios/api/api.service'
import { ToastrService } from 'ngx-toastr';
import { MatSelectChange } from '@angular/material/select';


@Component({
  selector: 'app-vistas-registro',
  templateUrl: './vistas-registro.component.html',
  styleUrls: ['./vistas-registro.component.scss']
})
export class VistasRegistroComponent implements OnInit{
  
 //--------------------------------------------------------------------------------------------------------------//
  postregistro() {
    throw new Error('Method not implemented.');
    }
 //--------------------------------------------------------------------------------------------------------------//

    datos: any[]=[]; datosR: any[]=[]; datosM: any[]=[]; datosE: any[]=[]; registroD:any[]=[];  
    form: FormGroup;
    id: string | undefined;
    ResponsablesDetalle: string[]=[];
      Formulario = new FormGroup({
        Asunto : new FormControl('',Validators.required)
      })
      constructor(private api:ApiService, private fb: FormBuilder,private toastr: ToastrService) {
        this.form =this.fb.group({
          Remitente:['',Validators.required],
          Asunto:['',Validators.required],
          Medio:['', Validators.required],
          Registro:['', Validators.required],
          Fecha:['',Validators.required],
          responsableId:[''],
          FechaRegistro: [''],  
        })
      }
       //--------------------------------------------------------------------------------------------------------------//
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
        /* Alerta de boton guardar para no enviar datos nulos  */
        //console.log(this.form);
        // console.log(this.ResponsablesDetalle.length)
        if (this.ResponsablesDetalle.length === 0 ) {
        // console.log("Perroloco");
        this.toastr.warning('Informacion invalida', 'Ingrese Informacion');
        return;
        }

        if (this.form.invalid === true){
          // console.log("Perroloco");
          this.toastr.warning('Informacion invalida', 'Ingrese Informacion');
        return;
        }
        const registro: any = {
          RemitenteId: this.form.get('Remitente')?.value,
          Ciudad: this.form.get('Ciudad')?.value,
          AsuntoId: this.form.get('Asunto')?.value,
          MedioId: this.form.get('Medio')?.value,
          Nota: this.form.get('Registro')?.value,
          Fecha: this.form.get('Fecha')?.value,
          FechaRegistro: this.transformarFecha(new Date()),
          EstadoId:1,
        }
        // console.log(registro);
        this.api.GuardarRegistro(registro).subscribe(
          registro => {
            // console.log('Respuesta del servidor:', registro);
            if (registro == null) {
              // Aquí manejas el envío del formulario
              this.toastr.success('Registro no pudo ser guardo correctamente', 'Registro No se guardo');
              // Puedes manejar el error aquí
            } else {
              
            this.id=registro['id'];
            this.GuardarRegistroDetalle();
            this.toastr.success('Registro se guardo correctamente', 'Registro Guardado');
            // console.log(this.id);
            // console.log(this.id=registro['id'])
            this.form.reset();
            }
          },
          error => {     
          }
        )
        this.form.reset();   
      }
      //--------------------------------------------------------------------------------------------------------------//
      GuardarRegistroDetalle(){
        // console.log(this.id)
        // console.log(this.ResponsablesDetalle)

        for (let numero of this.ResponsablesDetalle){
          const registrodetalle: any = {
            registroId: this.id,
            responsableId: numero,
       }
          this.api.GuardarRegistroDetalle(registrodetalle).subscribe()
        }
        
          

      }
 //--------------------
RecorrerCheck(event: MatSelectChange){


  //Guarda el valor seleccionado en la variable de select
  this.ResponsablesDetalle = event.value; // Actualiza la variable con el nuevo valor seleccionado
  console.log('Valor seleccionado:', this.ResponsablesDetalle);
  }
 
 
 //------------------------------------------------------------------------------------------//
      transformarFecha(fecha: Date): Date {
        fecha.setMinutes(fecha.getMinutes() - fecha.getTimezoneOffset());
        return fecha;
      }
 //--------------------------------------------------------------------------------------------------------------//

}
