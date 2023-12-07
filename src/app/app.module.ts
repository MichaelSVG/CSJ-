import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { UsuarioModule } from './Usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';


import {ReactiveFormsModule, FormsModule , FormGroup} from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    PagesModule,
    UsuarioModule,
    AuthModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    


  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent,]
})
export class AppModule { }
