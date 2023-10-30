import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { UsuarioDetailsComponent } from './usuario-details/usuario-details.component';


const Routes: Routes =[
  {path:'Usuarios', component: UsuarioListComponent},
  {path: 'UsuarioCreate', component: UsuarioCreateComponent},
  {path:'UsuarioEdit/:id', component: UsuarioEditComponent},
  {path: 'UsuarioDatails/id', component: UsuarioDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports:[RouterModule]

})
export class UsuarioRoutingModule { }
