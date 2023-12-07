import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { DashboardComponent } from './Dashboard/dashboard.component';



const Routes: Routes =[
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login', component: LoginComponent },
  {path:'dashboard', component:DashboardComponent,
  children:[
      {path:'Vistas',
        loadChildren: () => import('./Vistas/vistas.module').then(m => m.VistasModule)
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
