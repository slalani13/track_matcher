import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-entry-competitive',
  templateUrl: './text-entry-competitive.component.html',
  styleUrls: ['./text-entry-competitive.component.css']
})
export class TextEntryCompetitiveComponent implements OnInit {

  word_limit:number = 3;
  correct_answer:string = ""

  @Input()
  set correctAnswer(value: string) {
    if (value !== this.correct_answer) {
      this.correct_answer = value.replace('(', '').replace(')','').toLowerCase().split(' ').slice(0,this.word_limit).join(" ");
    }
  }
  @Output() answerCorrect = new EventEmitter<boolean>();
  
  answer:string = ""

  constructor(){

  }

  ngOnInit(): void {
  }

  onTextChange(event: Event) {
    this.answer = (event.target as HTMLTextAreaElement).value;
  }

  submit():void {
    if (this.answer.toLowerCase() === this.correct_answer && this.correct_answer !== ""){
      this.answerCorrect.emit(true);
    }
    else{
      this.answerCorrect.emit(false);
    }
    this.answer = "";
  }

}
