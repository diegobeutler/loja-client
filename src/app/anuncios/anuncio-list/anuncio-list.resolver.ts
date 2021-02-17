import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {Anuncio} from '../anuncio/anuncio';
import {AnuncioService} from '../anuncio/anuncio.service';


@Injectable({ providedIn: 'root'})
export class AnuncioListResolver implements Resolve<Observable<Anuncio[]>>{

  constructor(private service: AnuncioService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Anuncio[]> {
    const userName = route.params.userName;
    return this.service.listFromUser(userName);
  }

}
