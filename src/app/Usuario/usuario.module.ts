import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioDetailsComponent } from './usuario-details/usuario-details.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    UsuarioCreateComponent,
    UsuarioListComponent,
    UsuarioDetailsComponent,
    UsuarioEditComponent,
    
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
    
    
  ]
})
export class UsuarioModule { }
