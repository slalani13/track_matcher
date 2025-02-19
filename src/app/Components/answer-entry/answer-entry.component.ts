import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-entry',
  templateUrl: './answer-entry.component.html',
  styleUrls: ['./answer-entry.component.css']
})
export class AnswerEntryComponent implements OnInit{
  
  answer:string = ""

  constructor(){

  }

  ngOnInit(): void {
  }

  submit():void {
    
  }

}
