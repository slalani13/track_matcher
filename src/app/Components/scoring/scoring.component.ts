import { Component, OnInit } from '@angular/core';

const SETTINGS_KEY = "who's who settings"

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.css']
})
export class ScoringComponent implements OnInit {

  private max_points:number = 4;

  points:number = 0;
  answerCorrect:boolean = false;
  firstAnswer:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  answerStatus(correct:boolean, attempt:number){
    this.firstAnswer = true;
    this.answerCorrect = correct;
    if(correct){
      this.points += Math.floor(Math.max(0, this.max_points - attempt) * (60 / JSON.parse(localStorage.getItem(SETTINGS_KEY)!).competitive_time));
    }
  }

}
