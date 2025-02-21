import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import {default_settings, Settings} from "../../Models/settings";

const SETTINGS_KEY = "who's who settings"

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit{
  @Input() active:boolean = false;
  @Output() activeChange = new EventEmitter<boolean>();
  currentConfig:Settings = default_settings;

  leaderboard_active:boolean = false;

  theme:string = "dark";
  time:number = 0;
  times:number[] = [30,60,90,120,180];
  
  constructor() { }

  ngOnInit(): void {
    this.currentConfig = JSON.parse(localStorage.getItem(SETTINGS_KEY)!)
    console.log("current settings "+this.currentConfig);
    if (this.currentConfig.theme != this.theme){
      this.toggleDarkMode();
    }
  }

  onTimeChange(){
    this.currentConfig.competitive_time = this.time;
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.currentConfig));
  }

  toggleDarkMode() {
    this.currentConfig.theme = this.currentConfig.theme === "light" ? "dark" : "light";
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.currentConfig));
    document.documentElement.classList.toggle('dark');
  }

  openLeaderboard() : void{
    this.leaderboard_active = true;
  }

  closeLeaderboard() : void{
    this.leaderboard_active = false;
  }

  closePopup() : void {
    this.activeChange.emit();
    this.active = false;
  }
}
