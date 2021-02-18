import {Anuncio} from './anuncio';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AnuncioForm} from '../anuncio-form/anuncioForm';

@Injectable({providedIn: 'root'})
export class AnuncioService {

  constructor(private http: HttpClient,
              private anuncioForm: AnuncioForm) {
  }

  listar(): Observable<Anuncio[]> {
   return this.http.get<Anuncio[]>(environment.api + '/anuncios');
  }

  cadastrar(anuncio: Anuncio): Observable<void> {
  if (anuncio.id){
    return this.http.put<void>(environment.api + '/anuncios', anuncio);
  }
     // @ts-ignore
    return this.http.post<void>(environment.api + '/anuncios', anuncio);
  }

  findById(id: number): Observable<Anuncio> {
    return this.http.get<Anuncio>(environment.api + '/anuncios/' + id);
  }
}
