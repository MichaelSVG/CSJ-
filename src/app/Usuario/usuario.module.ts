import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioDetailsComponent } from './usuario-details/usuario-details.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { UsuarioRoutingModule } from './usuario-routing.module';



@NgModule({
  declarations: [
    UsuarioCreateComponent,
    UsuarioListComponent,
    UsuarioDetailsComponent,
    UsuarioEditComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
