import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AnuncioForm {
  private titulo = '';
  private mensagem = '';
  private urlImagem = '';

  setTitulo(value: string): void {
    this.titulo = value;
  }

  setMensagem(value: string): void {
    this.mensagem = value;
  }

  setUrlImagem(value: string): void {
    this.urlImagem = value;
  }
}
