import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AnuncioListComponent} from './anuncios/anuncio-list/anuncio-list.component';
import {AnuncioFormComponent} from './anuncios/anuncio-form/anuncio-form.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {AnuncioListResolver} from './anuncios/anuncio-list/anuncio-list.resolver';

const routes: Routes = [
  {
    path: 'user/:userName',
    component: AnuncioListComponent,
    resolve: {
      anuncios: AnuncioListResolver
    }
  },
  {path: 'a/add', component: AnuncioFormComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],// forRoot localhost:4200/
  exports: [RouterModule]
})
export class AppRoutingModule { }
