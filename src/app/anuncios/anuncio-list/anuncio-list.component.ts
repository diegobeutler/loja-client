import { Component, OnInit } from '@angular/core';
import {Anuncio} from '../anuncio/anuncio';
import {AnuncioService} from '../anuncio/anuncio.service';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-anuncio-list',
  templateUrl: './anuncio-list.component.html',
  styleUrls: ['./anuncio-list.component.scss']
})
export class AnuncioListComponent implements OnInit {

  anuncios: Anuncio[] = [];
  filter = '';
 // debounce: Subject<string> = new Subject<string>();

  constructor(private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.anuncios = this.activatedRoute.snapshot.data['anuncios'];
  }
  onKey($event: KeyboardEvent): void{
    this.filter =  ($event.target as HTMLInputElement).value;
  }
}
