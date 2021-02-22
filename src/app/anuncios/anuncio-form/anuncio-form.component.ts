import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {any} from 'codelyzer/util/function';
import {AnuncioService} from '../anuncio/anuncio.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Anuncio} from '../anuncio/anuncio';

@Component({
  selector: 'app-anuncio-form',
  templateUrl: './anuncio-form.component.html',
  styleUrls: ['./anuncio-form.component.scss']
})
export class AnuncioFormComponent implements OnInit {
  // @ts-ignore
  anuncioForm: FormGroup;
  // @ts-ignore
  url = '';

  constructor(private formBuilder: FormBuilder,
              private anuncioService: AnuncioService,
              private router: Router,
              public anuncio: Anuncio,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.anuncioForm = this.formBuilder.group({
      url: ['', Validators.minLength(3)],
      titulo: ['', [Validators.maxLength(50), Validators.minLength(3)]],
      mensagem: ['', [Validators.maxLength(300), Validators.minLength(3)]]
    });
    const id =  this.activatedRoute.snapshot.params.id;
    if (id) {
      this.anuncioService.findById(id).subscribe(e => {
        this.anuncio = e;
        this.anuncioForm.controls['url'].setValue(this.anuncio.urlImagem);
        this.anuncioForm.controls['titulo'].setValue(this.anuncio.titulo);
        this.anuncioForm.controls['mensagem'].setValue(this.anuncio.mensagem);
        this.url = this.anuncioForm.get('url')?.value;
      });
    }
  }

  upload(): void {
    this.anuncio.urlImagem = this.anuncioForm.get('url')?.value;
    this.anuncio.titulo = this.anuncioForm.get('titulo')?.value;
    this.anuncio.mensagem = this.anuncioForm.get('mensagem')?.value;

    this.anuncioService.cadastrar(this.anuncio).subscribe(() => {
      this.router.navigate(['/home']);

    });
  }

  remover(): void {
    this.anuncioService.remover(this.anuncio).subscribe(() => {
      this.router.navigate(['/home']);

    });
  }

  setUrl(): void {
    this.url =  this.anuncioForm.get('url')?.value;
  }
}
