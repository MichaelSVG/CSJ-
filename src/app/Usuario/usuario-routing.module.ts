import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { UsuarioDetailsComponent } from './usuario-details/usuario-details.component';
import {MatTableModule} from '@angular/material/table';
import {FormsModule, FormGroup} from '@angular/forms';


const Routes: Routes =[
  {path:'Usuarios', component: UsuarioListComponent},
  {path: 'UsuarioCreate', component: UsuarioCreateComponent},
  {path:'UsuarioEdit/:id', component: UsuarioEditComponent},
  {path: 'UsuarioDatails/id', component: UsuarioDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(Routes), MatTableModule,FormsModule],
  exports:[RouterModule]

})
export class UsuarioRoutingModule { }
