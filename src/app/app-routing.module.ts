import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PagesComponent } from './pages/pages.component';



const Routes: Routes =[
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login', component: AuthComponent },
  {path:'dashboard', component:PagesComponent,
  children:[
      {path:'Usuario',
        loadChildren: () => import('./Usuario/usuario.module').then(m => m.UsuarioModule)
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
