import {Component, Input} from '@angular/core';
import {Anuncio} from './anuncio';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.scss']
})
export class AnuncioComponent {

  constructor() { }
  @Input() anuncio: any;
<<<<<<< HEAD
=======
  @Input() titulo = '';
  @Input() mensagem = '';
  @Input() url = '';
>>>>>>> origin/master

}
