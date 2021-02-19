import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() filter = '';
  @Input() isAnuncio = false;
  constructor() { }

  ngOnInit(): void {
  }

  receberFiltro(event: string): void {
    this.filter = event;
  }
}
