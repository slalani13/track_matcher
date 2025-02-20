import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { difficulty, Settings } from 'src/app/Models/settings';

const SETTINGS_KEY = "who's who settings"

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit{
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
