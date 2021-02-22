import {Component, ViewChild} from '@angular/core';
// import {CodemirrorComponent} from '@ctrl/ngx-codemirror';
import {MymessageService} from './mymessage.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-message',
  templateUrl: './mymessage.component.html',
  styleUrls: ['./mymessage.component.scss']
})
export class MymessageComponent {


  showModalError = false;

  mensagem = '';
  error = '';

  showLog = false;
  log: any;

  constructor(private messageService: MymessageService) {
  }

}
