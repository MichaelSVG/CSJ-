import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './Dashboard/dashboard.module';
import { VistasModule } from './Vistas/vistas.module';
import { LoginModule } from './Login/login.module';
import {MatFormFieldModule} from '@angular/material/form-field';





@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    DashboardModule,
    VistasModule,
    LoginModule,
    MatFormFieldModule


  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
