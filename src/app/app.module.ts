import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecureComponent } from './secure/secure.component';

import { PublicModule } from './public/public.module';

// Import HttpClientModule from @angular/common/http in AppModule
import {HttpClientModule} from '@angular/common/http';


//in place where you wanted to use `HttpClient`
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SecureComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
