import { Component, OnInit } from '@angular/core';
import {Anuncio} from '../../anuncios/anuncio/anuncio';
import {Usuario} from '../usuario/usuario';
import {UsuarioService} from '../usuario/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {
  usuarios: Usuario[] = [];
  constructor(private usarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usarioService.listar().subscribe(e => {
      this.usuarios = e;
    });
  }

}
