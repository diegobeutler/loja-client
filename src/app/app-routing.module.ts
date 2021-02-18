import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AnuncioListComponent} from './anuncios/anuncio-list/anuncio-list.component';
import {AnuncioFormComponent} from './anuncios/anuncio-form/anuncio-form.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {AnuncioListResolver} from './anuncios/anuncio-list/anuncio-list.resolver';
import {HomeComponent} from './home/home.component';

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
  {path: 'u/add', component: AnuncioFormComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],// forRoot localhost:4200/
  exports: [RouterModule]
})
export class AppRoutingModule { }
