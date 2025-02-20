import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LeaderboardComponent } from "./Components/leaderboard/leaderboard.component";
import { HowToComponent } from "./Components/how-to/how-to.component";
import { SettingsComponent } from "./Components/settings/settings.component";
import { ModeSelectComponent } from "./Components/mode-select/mode-select.component";
import { TimerComponent } from "./Components/timer/timer.component";
import { AnswerEntryComponent } from "./Components/answer-entry/answer-entry.component";
import { AudioPlayerComponent } from "./Components/audio-player/audio-player.component";
import { CloseButtonComponent } from "./Components/close-button/close-button.component";
import { TrackMetadataComponent } from "./Components/track-metadata/track-metadata.component";
import { CasualComponent } from "./casual/casual.component";
import { CompetitiveComponent } from "./competitive/competitive.component";
import { AppRoutingModule } from './app-routing.module';
import { ScoringComponent } from './Components/scoring/scoring.component';
import { TextEntryCompetitiveComponent } from './Components/text-entry-competitive/text-entry-competitive.component';
import { TrackDataCompetitiveComponent } from './Components/track-data-competitive/track-data-competitive.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, LeaderboardComponent, 
    HowToComponent, SettingsComponent, ModeSelectComponent, TimerComponent, AnswerEntryComponent,
  AudioPlayerComponent, CloseButtonComponent, TrackMetadataComponent, CasualComponent, CompetitiveComponent, ScoringComponent, TextEntryCompetitiveComponent, TrackDataCompetitiveComponent],

  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
