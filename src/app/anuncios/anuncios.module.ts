import {NgModule} from '@angular/core';
import {AnuncioComponent} from './anuncio/anuncio.component';


@NgModule({
  declarations: [AnuncioComponent],
  exports: [
    AnuncioComponent
  ]


})
export class AnunciosModule {}
