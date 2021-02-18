import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AnunciosModule} from './anuncios/anuncios.module';
import {ErrorsModule} from './errors/errors.module';
import { NavbarComponent } from './navbar/navbar.component';
import {NavbarModule} from './navbar/navbar.module';
import { HomeComponent } from './home/home.component';
import {AnuncioListModule} from './anuncios/anuncio-list/anuncio-list.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnunciosModule,
    ErrorsModule,
    NavbarModule,
    AnuncioListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
