export class Anuncio {
  id: number;
  titulo: string;
  mensagem: string;
  urlImagem: string;
  data: Date;

  constructor(id: number, titulo: string, mensagem: string, urlImagem: string, data: Date) {
    this.id = id;
    this.titulo = titulo;
    this.mensagem = mensagem;
    this.urlImagem = urlImagem;
    this.data = data;
  }
}
