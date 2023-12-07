import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistasRegistroComponent } from './vistas-registro/vistas-registro.component';
import { VistasSeguimientoComponent } from './vistas-seguimiento/vistas-seguimiento.component';
import { VistasEditarComponent } from './vistas-editar/vistas-editar.component';
import { VistasEliminarComponent } from './vistas-eliminar/vistas-eliminar.component';
import { VistasRoutingModule } from './vistas-routing.module';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    VistasRegistroComponent,
    VistasSeguimientoComponent,
    VistasEditarComponent,
    VistasEliminarComponent,
   
  ],
  imports: [
    CommonModule,
    VistasRoutingModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatSelectModule
  ]
})
export class VistasModule { }
