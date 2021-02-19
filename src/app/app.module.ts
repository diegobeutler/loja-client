import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AnunciosModule} from './anuncios/anuncios.module';
import {ErrorsModule} from './errors/errors.module';

import {NavbarModule} from './navbar/navbar.module';
import { HomeComponent } from './home/home.component';
import {AnuncioListModule} from './anuncios/anuncio-list/anuncio-list.module';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { UsuarioFormComponent } from './usuarios/usuario-form/usuario-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {VMessageModule} from './vmessage/vmessage.module';
import {UsuariosModule} from './usuarios/usuarios.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnunciosModule,
    UsuariosModule,
    ErrorsModule,
    NavbarModule,
    AnuncioListModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
