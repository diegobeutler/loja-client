import {NgModule} from '@angular/core';
import {AnuncioListComponent} from './anuncio-list.component';
import {AnunciosComponent} from './anuncios/anuncios.component';
import {FilterByTitulo} from './filter-by-titulo.pipe';
import {CommonModule} from '@angular/common';
import {AnuncioModule} from '../anuncio/anuncio.module';

@NgModule({
  declarations: [
    AnuncioListComponent,
    AnunciosComponent,
    FilterByTitulo
  ],
  imports: [
    CommonModule,
    AnuncioModule
  ]
})
export class AnuncioListModule {

}
