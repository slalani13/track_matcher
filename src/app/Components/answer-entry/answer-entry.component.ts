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

  // submit():void {
  //   if (this.answer && this.answer.trim().toLowerCase() === this.correctAnswer.trim().toLowerCase()) {
  //     this.isCorrect = true;
  //   } else{
  //     this.isCorrect = false;
  //   }
  // }

  submits():void {
    if (this.answer) {
      const correctAnswerWithoutParenthesis = this.correctAnswer.split("(")[0].trim().toLowerCase();
      console.log("This is correct answer: " + correctAnswerWithoutParenthesis);
      if (this.answer.trim().toLowerCase() === correctAnswerWithoutParenthesis) {
        this.isCorrect = true;
      } else{
      this.isCorrect = false;
      }
    console.log("we are in submits function. " + this.answer);
    }
  }

  resetAnswer(): void {
    this.answer = ""; // Reset input field
    this.isCorrect = null; // Reset answer feedback (correct/incorrect)
  }

}
