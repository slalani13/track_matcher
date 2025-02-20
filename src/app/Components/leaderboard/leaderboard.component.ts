import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const LEADERBOARD_KEY = "leaderboard"

interface LeaderboardEntry {
  name: string;
  score: number;
}

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
