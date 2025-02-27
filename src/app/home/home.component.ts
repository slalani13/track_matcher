import { Component, OnInit } from "@angular/core";
import fetchFromSpotify, { request } from "../../services/api";
import {default_settings} from "../Models/settings";

const SETTINGS_KEY = "who's who settings"

const AUTH_ENDPOINT =
  "https://nuod0t2zoe.execute-api.us-east-2.amazonaws.com/FT-Classroom/spotify-auth-token";
const TOKEN_KEY = "whos-who-access-token";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {

  started: boolean = false;

  constructor() {}

  genres: String[] = ["House", "Alternative", "J-Rock", "R&B"];
  selectedGenre: String = "";
  authLoading: boolean = false;
  configLoading: boolean = false;
  token: String = "";

  ngOnInit(): void {
    this.authLoading = true;
    this.initializeLeaderboard();
    this.initializeSettings();
    this.createToken();
  }

  initializeLeaderboard(): void {
    // Check if the leaderboard exists in localStorage
    const existingLeaderboard = localStorage.getItem('leaderboard');
    if (!existingLeaderboard) {
      // If it doesn't exist, set an empty leaderboard
      localStorage.setItem('leaderboard', JSON.stringify([]));
    }
    console.log("This is the leaderboard: " + existingLeaderboard);
  }

  initializeSettings(): void {
    // Check if settings exists in localStorage
    const existingSettings = localStorage.getItem(SETTINGS_KEY);
    if (!existingSettings) {
      // If it doesn't exist, set default settings empty settings
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(default_settings));
    }
    console.log("This is the settings: " + existingSettings);
  }

  createToken() {
    const storedTokenString = localStorage.getItem(TOKEN_KEY);
    if (storedTokenString) {
      const storedToken = JSON.parse(storedTokenString);
      if (storedToken.expiration > Date.now()) {
        console.log("Token found in localstorage");
        this.authLoading = false;
        this.token = storedToken.value;
        this.loadGenres(storedToken.value);
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
      this.authLoading = false;
      this.token = newToken.value;
      this.loadGenres(newToken.value);
    });
  }

  loadGenres = async (t: any) => {
    this.configLoading = true;

    // #################################################################################
    // DEPRECATED!!! Use only for example purposes
    // DO NOT USE the recommendations endpoint in your application
    // Has been known to cause 429 errors
    // const response = await fetchFromSpotify({
    //   token: t,
    //   endpoint: "recommendations/available-genre-seeds",
    // });
    // console.log(response);
    // #################################################################################
    
    this.genres = [
      "rock",
      "rap",
      "pop",
      "country",
      "hip-hop",
      "jazz",
      "alternative",
      "j-pop",
      "k-pop",
      "emo"
    ]
    this.configLoading = false;
  };

  setGenre(selectedGenre: any) {
    this.selectedGenre = selectedGenre;
    console.log(this.selectedGenre);
    console.log(TOKEN_KEY);
  }

  start():void{
    this.started = true;
  }

  cancelStart():void{
    this.started = false;
  }
}
