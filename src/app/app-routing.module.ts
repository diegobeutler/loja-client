import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AnuncioListComponent} from './anuncios/anuncio-list/anuncio-list.component';
import {AnuncioFormComponent} from './anuncios/anuncio-form/anuncio-form.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {AnuncioListResolver} from './anuncios/anuncio-list/anuncio-list.resolver';
import {HomeComponent} from './home/home.component';
<<<<<<< HEAD
import {UsuarioFormComponent} from './usuarios/usuario-form/usuario-form.component';
import {UsuarioListComponent} from './usuarios/usuario-list/usuario-list.component';
=======
>>>>>>> origin/master

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      anuncios: AnuncioListResolver
    }
  },
  {path: 'a/add', component: AnuncioFormComponent},
  {path: 'a/add/:id', component: AnuncioFormComponent},
<<<<<<< HEAD
  {path: 'u/add', component: UsuarioFormComponent},
  {path: 'u/add/:id', component: UsuarioFormComponent},
  {path: 'u/list', component: UsuarioListComponent},
  {path: '**',
    component: HomeComponent,
    resolve: {
      anuncios: AnuncioListResolver
    }}
=======
  {path: 'u/add', component: AnuncioFormComponent},
  {path: '**', component: NotFoundComponent}
>>>>>>> origin/master
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],// forRoot localhost:4200/
  exports: [RouterModule]
})
export class AppRoutingModule { }
