import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getTrackNamesFromArtist } from 'src/services/getTrackNames';
import { AnswerEntryComponent } from '../Components/answer-entry/answer-entry.component';
import { request } from 'src/services/api';


const AUTH_ENDPOINT =
  "https://nuod0t2zoe.execute-api.us-east-2.amazonaws.com/FT-Classroom/spotify-auth-token";
const TOKEN_KEY = "whos-who-access-token";

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
  anagram_array: string[] = [];

  @ViewChild(AnswerEntryComponent) answerEntryComponent!: AnswerEntryComponent; // Access AnswerEntryComponent

  constructor(private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.createToken();
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

  async getRandomTrack() {
    try {
      const tracks = await getTrackNamesFromArtist(this.artistId); // Wait for the API response
      console.log("These are the tracks: ", tracks);
  
      if (Array.isArray(tracks) && tracks.length > 0) {
        const t = Math.floor(Math.random() * tracks.length);
        this.trackName = tracks[t];
        this.anagram = this.getAnagram(this.trackName);
        this.anagram_array = this.anagram.split('');
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
