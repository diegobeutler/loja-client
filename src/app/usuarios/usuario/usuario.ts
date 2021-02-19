import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root'})
export class Usuario {
   id: number;
   nome = '';
   email = '';
   senha = '';
}
