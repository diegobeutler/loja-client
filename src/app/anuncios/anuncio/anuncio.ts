import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root'})
export class Anuncio {
  id: number;
  titulo = '';
  mensagem = '';
  urlImagem = '';
  data: Date;
}

