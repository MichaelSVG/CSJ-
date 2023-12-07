import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {FormGroup, Validators} from '@angular/forms'
 
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {



  constructor( private router : Router){}

    login(){
      this.router.navigateByUrl('/dashboard/Usuario/Usuarios')
    }
    
  


}
