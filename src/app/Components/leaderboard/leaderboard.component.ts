import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

const LEADERBOARD_KEY = "who's who leaderboard"

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit{
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
