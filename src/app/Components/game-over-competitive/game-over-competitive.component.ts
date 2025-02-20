import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { LeaderboardComponent } from '../leaderboard/leaderboard.component';

const LEADERBOARD_KEY = "who's who leaderboard"

@Component({
  selector: 'app-game-over-competitive',
  templateUrl: './game-over-competitive.component.html',
  styleUrls: ['./game-over-competitive.component.css']
})
export class GameOverCompetitiveComponent implements OnInit {

  @ViewChild('leaderboard') leaderboardComponent!: LeaderboardComponent;

  @Input() active:boolean = false;
  points:number = 0;

  username:string = ""

  constructor() { 

  }

  ngOnInit(): void {

  }

  onTextChange(event: Event) {
    this.username = (event.target as HTMLTextAreaElement).value;
  }

  addToLeaderboard(): void {
    this.leaderboardComponent.getLeaderboard();
    this.leaderboardComponent.addToLeaderboard(this.username, this.points);
  }

  close() : void {
    this.active = false;
  }

}
