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
    // this.initialize_leaderboard();
  }

  // initialize_leaderboard(): void{
  //   if (localStorage.getItem(LEADERBOARD_KEY) == undefined){
  //     localStorage.setItem(LEADERBOARD_KEY,JSON.stringify({}))
  //   }
  //   //this.leaderboard = JSON.parse(localStorage.getItem(LEADERBOARD_KEY)!).value

  // }

  closePopup() : void {
    this.activeChange.emit();
    this.active = false;
  }
}
