import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mode-select',
  templateUrl: './mode-select.component.html',
  styleUrls: ['./mode-select.component.css']
})
export class ModeSelectComponent implements OnInit{
  @Input() active:boolean = false;
  @Output() activeChange = new EventEmitter<boolean>();

  selectedMode: string = '';
  
  // constructor() { }
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

   ngOnChanges(changes: SimpleChanges): void {
    if (changes['active']) {
      this.activeChange.emit(changes['active'].currentValue);
    }
  }

  closePopup() : void {
    this.active = false;
  }

  // Handle selection of mode
  selectMode(mode: string) {
    this.selectedMode = mode;
    if (this.selectedMode == 'competitive') {
      console.log('Navigating to Competitive...');
      this.router.navigate(['/competitive']);
    }
  }

}
