import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MymessageComponent} from './mymessage.component';
// import {MessageService as MessagePrimeService} from 'primeng/components/common/messageservice';
import {DialogModule} from 'primeng/dialog';
// import {CodemirrorModule} from '@ctrl/ngx-codemirror';
import {FormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {MymessageService} from './mymessage.service';
import {ConfirmationService} from 'primeng//api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
// import {ToastModule} from "primeng/toast";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    DialogModule,
    CommonModule,
    MessagesModule,
    MessageModule
    // ButtonModule,
    // InputTextModule,
    // TabViewModule,
    // RippleModule,
    // AppCodeModule
  ],
  declarations: [
    MymessageComponent
  ],
  providers: [
    // MessagePrimeService,
    MessageService,
    MymessageService, ConfirmationService
  ],
  exports: [
    MymessageComponent
  ]
})
export class MymessageModule { }
