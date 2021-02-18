import {Anuncio} from './anuncio';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AnuncioService {

  constructor(private http: HttpClient) {
  }

  listFromUser(userName: string): Observable<Anuncio[]> {
   return this.http.get<Anuncio[]>(environment.api + '/anuncios/user/' + 'Diego');
  }
}
