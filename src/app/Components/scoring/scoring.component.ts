import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.css']
})
export class ScoringComponent implements OnInit {

  points:number = 0;
  answerCorrect:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
