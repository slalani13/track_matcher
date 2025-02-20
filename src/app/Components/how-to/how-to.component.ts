import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.css']
})
export class HowToComponent implements OnInit {
  @Input() active:boolean = false;
  @Output() activeChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closePopup() : void {
    this.activeChange.emit();
    this.active = false;
  }

}
