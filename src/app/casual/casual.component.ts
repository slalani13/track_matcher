import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getTrackNamesFromArtist } from 'src/services/getTrackNames';
import { AnswerEntryComponent } from '../Components/answer-entry/answer-entry.component';

@Component({
  selector: 'app-casual',
  templateUrl: './casual.component.html',
  styleUrls: ['./casual.component.css']
})
export class CasualComponent implements OnInit {
  artistName: string = '';
  artistId: string = '';
  trackName: string = '';
  anagram: string = '';

  @ViewChild(AnswerEntryComponent) answerEntryComponent!: AnswerEntryComponent; // Access AnswerEntryComponent

  constructor(private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    // Read query parameters when component initializes. Subscribe is listening to observables such as route parameters which can change dynamically
    this.route.queryParams.subscribe(params => {
      this.artistName = params['artistName'] || ''; // Get artist name
      this.artistId = params['artistId'] || '';
      console.log(`Received artist: ${this.artistName}`);
      console.log(`Received artist id: ${this.artistId}`);
      if (this.artistId != '') {
        this.getRandomTrack();
      }
    });
  }

  async getRandomTrack() {
    try {
      const tracks = await getTrackNamesFromArtist(this.artistId); // Wait for the API response
      console.log("These are the tracks: ", tracks);
  
      if (Array.isArray(tracks) && tracks.length > 0) {
        const t = Math.floor(Math.random() * tracks.length);
        this.trackName = tracks[t];
        this.anagram = this.getAnagram(this.trackName);
        if (this.answerEntryComponent) {
          this.answerEntryComponent.resetAnswer();
        }
      } else {
        console.log("No tracks found for artist " + this.artistName);
      }
    } catch (error) {
      console.error("Error fetching tracks:", error);
    }
  }

  getAnagram(trackName: string): string {
    if (!trackName) return '';
  
    const characters = trackName.split('');
  
    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Get a random index
      [characters[i], characters[j]] = [characters[j], characters[i]]; // Swap elements
    }
    return characters.join('');
  }
}
