import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer-entry',
  templateUrl: './answer-entry.component.html',
  styleUrls: ['./answer-entry.component.css']
})
export class AnswerEntryComponent implements OnInit{
  @Input() correctAnswer: string = '';
  answer:string = "";
  isCorrect: boolean | null = null;

  constructor(){

  }

  ngOnInit(): void {
  }

  submit():void {
    if (this.answer && this.answer.trim().toLowerCase() === this.correctAnswer.trim().toLowerCase()) {
      this.isCorrect = true;
    } else{
      this.isCorrect = false;
    }
  }

  resetAnswer(): void {
    this.answer = ""; // Reset input field
    this.isCorrect = null; // Reset answer feedback (correct/incorrect)
  }

}
