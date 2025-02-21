import { Component, OnInit, ViewChild } from '@angular/core';
import { artistIds } from '../Models/artistData';
import { getTrackNamesFromArtist } from 'src/services/getTrackNames';
import { request } from "../../services/api";
import { ScoringComponent } from '../Components/scoring/scoring.component';
import { GameOverCompetitiveComponent } from '../Components/game-over-competitive/game-over-competitive.component';
import { classes } from '../Models/classData';
import { ActivatedRoute } from '@angular/router';
import { TimerComponent } from '../Components/timer/timer.component';
import { timer } from 'rxjs';

const AUTH_ENDPOINT =
  "https://nuod0t2zoe.execute-api.us-east-2.amazonaws.com/FT-Classroom/spotify-auth-token";
const TOKEN_KEY = "whos-who-access-token";


@Component({
  selector: 'app-competitive',
  templateUrl: './competitive.component.html',
  styleUrls: ['./competitive.component.css']
})
export class CompetitiveComponent implements OnInit{
  @ViewChild('scoring') scoringComponent!: ScoringComponent;
  @ViewChild('gameOver') gameOverCompetitiveComponent!: GameOverCompetitiveComponent;
  @ViewChild('timer') timerComponent!: TimerComponent;
  
  artist_ids:Map<string, string> = new Map();
  artist_name:string = "";
  track_name:string = "";
  attempts:number = 0;
  isGameOver:boolean = false;
  showAnswerStatus:boolean = false;

  chosen_class:classes = classes.EQUALIZER;

  constructor(private route: ActivatedRoute) {
    this.artist_ids = artistIds
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const classValue = Number(params['chosen_class']);
      if (Object.values(classes).includes(classValue)) {
        this.chosen_class = classValue as classes;
      } else {
        this.chosen_class = classes.EQUALIZER;
      }
    });

    this.createToken();
    this.selectRandomTrack();
  }

  createToken() {
    const storedTokenString = localStorage.getItem(TOKEN_KEY);
    if (storedTokenString) {
      const storedToken = JSON.parse(storedTokenString);
      if (storedToken.expiration > Date.now()) {
        console.log("Token found in localstorage");
        return;
      }
    }
    console.log("Sending request to AWS endpoint");
    request(AUTH_ENDPOINT).then(({ access_token, expires_in }) => {
      const newToken = {
        value: access_token,
        expiration: Date.now() + (expires_in - 20) * 1000,
      };
      localStorage.setItem(TOKEN_KEY, JSON.stringify(newToken));
    });
  }

  
  // sets a random track name from a random artist in artist_ids 
  selectRandomTrack(): void {
    const artist_names = Array.from(this.artist_ids.keys());
    if (artist_names.length == 0){
      console.log("No artists found")
      return;
    }
    const r = Math.floor(Math.random() * artist_names.length);
     getTrackNamesFromArtist(artistIds.get(artist_names[r])!).then((tracks) =>{
      if (Array.isArray(tracks) && tracks.length > 0){
        const t = Math.floor(Math.random() * tracks.length);
        this.artist_name = artist_names[r];
        this.track_name = tracks[t];
      }
      else{
        console.log("No tracks found for artist "+artist_names[r]);
      }
      return;
    })
  }

  resetGame():void{
    this.scoringComponent.points = 0;
    this.timerComponent.resetTimer();
    this.isGameOver = false;
    this.showAnswerStatus = false;
  }

  onAnswerSubmit(correct: boolean): void{
    this.scoringComponent.answerStatus(correct, this.attempts);
    this.showAnswerStatus = true;
    if(correct){
      this.attempts = 0;
      this.skipTrack();
    }
    else{
      this.attempts += 1;
    }

  }

  gameFinish(): void{
    this.isGameOver = true;
    this.gameOverCompetitiveComponent.points = this.scoringComponent.points;
    console.log("game over");
  }

  skipTrack(): void{
    this.selectRandomTrack();
  }

}
