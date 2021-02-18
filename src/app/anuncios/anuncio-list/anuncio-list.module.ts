import {NgModule} from '@angular/core';
import {AnuncioListComponent} from './anuncio-list.component';
import {AnunciosComponent} from './anuncios/anuncios.component';
import {FilterByTitulo} from './filter-by-titulo.pipe';
import {CommonModule} from '@angular/common';
import {AnuncioModule} from '../anuncio/anuncio.module';
import {NavbarModule} from '../../navbar/navbar.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AnuncioListComponent,
    AnunciosComponent,
    FilterByTitulo
  ],
  exports: [
    AnuncioListComponent
  ],
  imports: [
    CommonModule,
    AnuncioModule,
    RouterModule
  ]
})
export class AnuncioListModule {

}
