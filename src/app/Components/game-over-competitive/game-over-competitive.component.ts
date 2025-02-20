import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

const LEADERBOARD_KEY = "who's who leaderboard"

@Component({
  selector: 'app-game-over-competitive',
  templateUrl: './game-over-competitive.component.html',
  styleUrls: ['./game-over-competitive.component.css']
})
export class GameOverCompetitiveComponent implements OnInit {

  @Input() active:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  close() : void {
    this.active = false;
  }

}
