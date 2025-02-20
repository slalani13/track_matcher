import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { interval, Subscription } from 'rxjs';

const SETTINGS_KEY = "who's who settings"

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit{

  finished:boolean = false;
  time:number = 10;
  @Output() gameOver = new EventEmitter<void>();
  private timerSubscription?: Subscription;

  constructor() {

  }

  ngOnInit(): void {
    this.time = JSON.parse(localStorage.getItem(SETTINGS_KEY)!).competitive_time
    this.timerSubscription = interval(1000).subscribe(() => {
      this.time -= 1;

      if (this.time == 0) {
        this.timerComplete();
      }
    });
  }

  timerComplete(){
    this.timerSubscription?.unsubscribe();
    this.gameOver.emit();
    this.finished = true;
    console.log("time's up")
  }

  ngOnDestroy(): void {
    this.timerSubscription?.unsubscribe();
  }

}
