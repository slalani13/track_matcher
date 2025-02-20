import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.css']
})
export class ScoringComponent implements OnInit {

  private max_points:number = 4;

  points:number = 0;
  answerCorrect:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  answerStatus(correct:boolean, attempt:number){
    this.answerCorrect = correct;
    if(correct){
      this.points += Math.max(0, this.max_points - attempt);
    }
  }

}
