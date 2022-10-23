import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PublicComponent } from './public.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


// Import HttpClientModule from @angular/common/http in AppModule
import {HttpClientModule} from '@angular/common/http';


//in place where you wanted to use `HttpClient`
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent,
    PublicComponent,
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    
    HttpClientModule,

  ]
})
export class PublicModule { }
