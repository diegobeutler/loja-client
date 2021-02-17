import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Anuncio} from './anuncios/anuncio/anuncio';

import {AnuncioService} from './anuncios/anuncio/anuncio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 anuncios: Anuncio[] = [];
 constructor(anuncioService: AnuncioService) {
   anuncioService.listFromUser('Diego').subscribe(anuncios => this.anuncios = anuncios);
 }
}
