import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {MessageService} from 'primeng/api';

@Injectable({providedIn: 'root'})
export class MymessageService {
  constructor(private messageService: MessageService) {
  }

  public info(message: string): void {
    this.messageService.clear();
    this.messageService.add({severity: 'info', summary: 'STATUS', detail: message});
  }

}
