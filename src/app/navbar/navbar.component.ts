import {Component, OnInit, Output, EventEmitter, Input, OnDestroy} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  constructor() { }

  @Input() filter = '';
  @Output() filterOutput = new EventEmitter<string>();
  filterSub: Subject<string> = new Subject<string>();
  ngOnInit(): void {
    this.filterSub.subscribe(e => {
     this.filterOutput.emit(e);
    });
  }

  onKey($event: KeyboardEvent): any {
    return ($event.target as HTMLInputElement).value;
  }

  ngOnDestroy(): void {
   this.filterSub.unsubscribe();
  }
}
