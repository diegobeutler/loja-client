import {NgModule} from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {AnuncioComponent} from './anuncio/anuncio.component';
import { AnuncioListComponent } from './anuncio-list/anuncio-list.component';
import { AnuncioFormComponent } from './anuncio-form/anuncio-form.component';
import { AnunciosComponent } from './anuncio-list/anuncios/anuncios.component';
import {FilterByTitulo} from './anuncio-list/filter-by-titulo.pipe';
import {AnuncioFormModule} from './anuncio-form/anuncio-form.module';
import {AnuncioModule} from './anuncio/anuncio.module';
import {AnuncioListModule} from './anuncio-list/anuncio-list.module';



@NgModule({

  imports: [
    AnuncioModule,
    AnuncioFormModule,
    AnuncioListModule
  ]
})
export class AnunciosModule {}
