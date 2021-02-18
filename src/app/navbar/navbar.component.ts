import {Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  filter = '';
  @Output() filterOutput = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onKey($event: KeyboardEvent): void{
    this.filter =  ($event.target as HTMLInputElement).value;
    this.filterOutput.emit(this.filter);
  }
}
