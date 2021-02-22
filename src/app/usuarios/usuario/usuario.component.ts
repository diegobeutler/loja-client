import {Component, Input, OnInit} from '@angular/core';
import {Usuario} from './usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  // @ts-ignore
  @Input() usuarios: Usuario[];
  filter = ';'
  constructor() { }

  ngOnInit(): void {
  }

}
