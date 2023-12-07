import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistasRegistroComponent } from './vistas-registro/vistas-registro.component';
import { VistasSeguimientoComponent } from './vistas-seguimiento/vistas-seguimiento.component';
import { VistasEditarComponent } from './vistas-editar/vistas-editar.component';
import { VistasEliminarComponent } from './vistas-eliminar/vistas-eliminar.component';


const Routes: Routes =[
  {path:  'Vistass', component: VistasRegistroComponent},
  {path:  'VistasSeguimiento', component: VistasSeguimientoComponent},
  {path:  'VistasEditar/:id', component: VistasEditarComponent},
  {path:  'VistasEliminar/:id', component: VistasEliminarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports:[RouterModule]

})
export class VistasRoutingModule { }
