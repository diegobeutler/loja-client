import { Pipe, PipeTransform } from '@angular/core';
import {Usuario} from '../usuario/usuario';


@Pipe({ name: 'filterByUser'})
export class FilterByUser implements PipeTransform {

  transform(usuarios: Usuario[], userName: string): Usuario[] {
    userName = userName
      .trim()
      .toLowerCase();

    if (userName) {
      return usuarios.filter(usuario =>
        usuario.nome.toLowerCase().includes(userName)
      );
    } else {
      return usuarios;
    }
  }
}
