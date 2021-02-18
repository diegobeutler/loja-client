import { Pipe, PipeTransform } from '@angular/core';
import {Anuncio} from '../anuncio/anuncio';
import {Observable} from 'rxjs';


@Pipe({ name: 'filterByTitulo'})
export class FilterByTitulo implements PipeTransform {

  transform(anuncios: Anuncio[], tituloQuery: string): Anuncio[] {
    tituloQuery = tituloQuery
      .trim()
      .toLowerCase();

    if (tituloQuery) {
      return anuncios.filter(anuncio =>
        anuncio.titulo.toLowerCase().includes(tituloQuery)
      );
    } else {
      return anuncios;
    }
  }
}
