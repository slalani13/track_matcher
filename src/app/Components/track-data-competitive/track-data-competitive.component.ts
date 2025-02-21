import { Component, Input, OnInit } from '@angular/core';
import { classes, class_stats } from 'src/app/Models/classData';

@Component({
  selector: 'app-track-data-competitive',
  templateUrl: './track-data-competitive.component.html',
  styleUrls: ['./track-data-competitive.component.css']
})
export class TrackDataCompetitiveComponent implements OnInit {
  track_name:string = "default track name";
  track_name_seen:string[] = [];
  private max_words:number = 3;
  private base_reveal_ratio:number = 0;
  private reveal_increase:number = 0.1;
  private vowel_reveal:boolean = false;
  private chosen_class:classes = classes.EQUALIZER;

  @Input()
  set chosenClass(value: classes) {
    this.chosen_class = value;
    this.updateClassStats();
    this.reveal(Math.floor(this.track_name.length * this.reveal_ratio));
  }
  get chosenClass(): classes {
    return this.chosen_class;
  }

  reveal_ratio:number = 0;
  num_attempts:number = 0;


  @Input() artist:string = "default"

  @Input()
  set trackName(value: string) {
    if (value !== this.track_name) {
      value = value.replace('(', '').replace(')','').split(" ").slice(0, this.max_words).join(" ");
      this.track_name = value;
      this.track_name_seen = value.split("").map(char => char === " " ? " " : "_");
      this.reveal(Math.floor(this.track_name.length * this.reveal_ratio));
    }
  }
  @Input()
  set numAttempts(value: number) {
    if (value !== this.num_attempts) {
      this.num_attempts = value;
      this.reveal_ratio = Math.min(1, this.base_reveal_ratio + value * this.reveal_increase);
      this.track_name_seen = this.track_name.split("").map(char => char === " " ? " " : "_");
      this.reveal(Math.floor(this.track_name.length * this.reveal_ratio));
    }
  }


  constructor() { 
   
  }

  ngOnInit(): void {
    this.updateClassStats();
  }

  updateClassStats(){
    const stats = class_stats.get(this.chosen_class);
    if (stats) {
      this.base_reveal_ratio = stats.base_reveal_ratio;
      this.reveal_increase = stats.reveal_increase;
      this.vowel_reveal = stats.see_vowels;
      this.reveal_ratio = Math.min(1, this.base_reveal_ratio + this.num_attempts * this.reveal_increase);
      this.reveal(Math.floor(this.track_name.length * this.reveal_ratio));
    } else {
      console.warn("Invalid class type:", this.chosen_class);
    }
  }

  notArchitect(){
    return this.chosen_class != classes.ARCHITECT;
  }

  isVowel(char: string): boolean {
    return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(char) && this.chosen_class == classes.ARCHITECT;
  }

  // reveals a set amount of characters if possible
  reveal(c: number) {
    let underscore: number[] = [];

    if (this.vowel_reveal){
      for (let i = 0; i < this.track_name_seen.length; i++) {
          if (this.isVowel(this.track_name[i])) {
            this.track_name_seen[i] = this.track_name[i].toUpperCase();
          }
      }
    }
  
    for (let i = 0; i < this.track_name_seen.length; i++) {
        if (this.track_name_seen[i] === '_') {
            underscore.push(i);
        }
    }

    let blanks_left = underscore.length;
    if (blanks_left === 0 || c <= 0) return;
    c = Math.min(c, blanks_left);

    for (let i = 0; i < c; i++) {
        let r = Math.floor(Math.random() * underscore.length);
        let index = underscore[r];

        if (this.track_name[index]) {
            this.track_name_seen[index] = this.track_name[index].toUpperCase();
        }

        underscore.splice(r, 1);
    }
  }
}
