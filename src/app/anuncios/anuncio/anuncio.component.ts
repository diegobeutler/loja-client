import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.scss']
})
export class AnuncioComponent {

  constructor() { }
  @Input() titulo = '';
  @Input() mensagem = '';
  @Input() url = '';

}
