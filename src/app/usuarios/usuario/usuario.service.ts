import {Injectable} from '@angular/core';
import {Anuncio} from '../../anuncios/anuncio/anuncio';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Usuario} from './usuario';
import {HttpClient} from '@angular/common/http';
import {AnuncioForm} from '../../anuncios/anuncio-form/anuncioForm';

@Injectable({providedIn: 'root'})
export class UsuarioService{
  constructor(private http: HttpClient) {
  }
  cadastrar(usuario: Usuario): Observable<void> {
    if (usuario.id){
      return this.http.put<void>(environment.api + '/usuario', usuario);
    }

    return this.http.post<any>(environment.api + '/usuario', usuario);
  }

  findById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(environment.api + '/usuario/' + id);
  }


  remover(usuario: Usuario): Observable<void> {
    return this.http.delete<void>(environment.api + '/usuario/' + usuario.id) ;
  }

  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(environment.api + '/usuario');
  }
}
