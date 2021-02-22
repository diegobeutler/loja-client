import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {UsuarioComponent} from './usuario/usuario.component';
import {UsuarioFormComponent} from './usuario-form/usuario-form.component';
import {VMessageModule} from '../vmessage/vmessage.module';
import {NavbarModule} from '../navbar/navbar.module';
import {ReactiveFormsModule} from '@angular/forms';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import {MymessageModule} from '../mymessage/mymessage.module';
import {FilterByUser} from './usuario-list/filter-by-user.pipe';

@NgModule({
  declarations: [UsuarioComponent,
    UsuarioFormComponent,
    UsuarioListComponent,
  FilterByUser],
  imports: [
    CommonModule,
    HttpClientModule,
    VMessageModule,
    NavbarModule,
    ReactiveFormsModule,
    MymessageModule
  ],
  exports: [ UsuarioComponent, UsuarioFormComponent, UsuarioListComponent ]
})
export class UsuariosModule {

}
