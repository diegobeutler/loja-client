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

  constructor(private formBuilder: FormBuilder,
              private anuncioService: AnuncioService,
              private router: Router,
              private anuncio: Anuncio,
              private activatedRoute: ActivatedRoute) { }
  url = '';
  ngOnInit(): void {
    const id =  this.activatedRoute.snapshot.params.id;
    if (id) {
      this.anuncioService.findById(id).subscribe(e =>{
        this.anuncio = e;
        this.anuncioForm = this.formBuilder.group({
          url: [this.anuncio.urlImagem || '', Validators.minLength(3)],
          titulo: [this.anuncio.titulo || '', [Validators.maxLength(50), Validators.minLength(3)]],
          mensagem: [this.anuncio.mensagem || '', [Validators.maxLength(300), Validators.minLength(3)]]
        });
      });
    } else{
      this.anuncioForm = this.formBuilder.group({
        url: [this.anuncio.urlImagem || '', Validators.minLength(3)],
        titulo: [this.anuncio.titulo || '', [Validators.maxLength(50), Validators.minLength(3)]],
        mensagem: [this.anuncio.mensagem || '', [Validators.maxLength(300), Validators.minLength(3)]]
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


  setFile($event: any): void {
    this.url = $event;
  }
}
