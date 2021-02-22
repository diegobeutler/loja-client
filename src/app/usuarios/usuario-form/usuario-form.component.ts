import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UsuarioService} from '../usuario/usuario.service';
import {Usuario} from '../usuario/usuario';
import {MymessageService} from '../../mymessage/mymessage.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements  OnInit{
  // @ts-ignore
  usuarioForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router,
              public usuario: Usuario,
              private activatedRoute: ActivatedRoute,
              private myMessageService: MymessageService) { }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      nome: ['', Validators.minLength(3)],
      email: ['', [Validators.maxLength(50), Validators.minLength(3)]],
      senha: ['', [Validators.maxLength(15), Validators.minLength(6)]]
    });
    const id =  this.activatedRoute.snapshot.params.id;
    if (id) {
      this.usuarioService.findById(id).subscribe(e => {
        this.usuario = e;
        this.usuarioForm.controls['nome'].setValue(this.usuario.nome);
        this.usuarioForm.controls['email'].setValue(this.usuario.email);
        this.usuarioForm.controls['senha'].setValue(this.usuario.senha);
      });
    }
  }

  salvar(): void {
    this.usuario.nome = this.usuarioForm.get('nome')?.value;
    this.usuario.email = this.usuarioForm.get('email')?.value;
    this.usuario.senha = this.usuarioForm.get('senha')?.value;

    this.usuarioService.cadastrar(this.usuario).subscribe(() => {
      this.router.navigate(['/u/list']);
    });
  }

  remover(): void {
    this.usuarioService.remover(this.usuario).subscribe(() => {
      this.router.navigate(['/u/list']);
    }, error => {
      alert('Não foi possível excluir usuário, Usuario possui anúncios vinculados');
      // this.myMessageService.info('Não foi possível excluir usuário, Usuario possui anúncios vinculados');
      this.router.navigate(['/u/list']);
    });
  }

}
