import {NgModule} from '@angular/core';
import {AnuncioComponent} from './anuncio.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AnuncioComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ AnuncioComponent ]
})
export class AnuncioModule{

}
