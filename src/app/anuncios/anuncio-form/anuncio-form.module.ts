import {NgModule} from '@angular/core';
import {AnuncioFormComponent} from './anuncio-form.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {VMessageModule} from '../../vmessage/vmessage.module';
import {NavbarModule} from '../../navbar/navbar.module';
import {AnuncioForm} from './anuncioForm';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [AnuncioFormComponent],
  imports: [CommonModule, ReactiveFormsModule, VMessageModule, NavbarModule, RouterModule]
})
export class AnuncioFormModule{

}
