import {Component, OnInit} from '@angular/core';
import {Anuncio} from './anuncios/anuncio/anuncio';

import {AnuncioService} from './anuncios/anuncio/anuncio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }

}
