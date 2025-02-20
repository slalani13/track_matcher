import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import {LeaderboardEntry} from "../../Models/leaderboardEntry"

const LEADERBOARD_KEY = "leaderboard"

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit{
  @Input() active:boolean = false;
  @Output() activeChange = new EventEmitter<boolean>();
  leaderboard: LeaderboardEntry[] = [];

  constructor() { }

  ngOnInit(): void {
    this.leaderboard = this.getLeaderboard();
    console.log("Leaderboard loaded:", this.leaderboard);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // When "active" changes, reload the leaderboard if the popup is opened (active is true)
    if (changes['active'] && changes['active'].currentValue === true) {
      this.loadLeaderboard();
    }
  }

  loadLeaderboard(): void {
    this.leaderboard = this.getLeaderboard();
    console.log("Leaderboard loaded:", this.leaderboard);
  }

  
  getLeaderboard(): LeaderboardEntry[] {
    return JSON.parse(localStorage.getItem(LEADERBOARD_KEY) || '[]') as LeaderboardEntry[];
  }

  addToLeaderboard(username: string, newscore: number): void {
    const leaderboard = this.getLeaderboard();
    const entry: LeaderboardEntry = { name: username, score: newscore };
    leaderboard.push(entry);
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(leaderboard));
  }

  closePopup() : void {
    this.activeChange.emit();
    this.active = false;
  }
}
