import { Component, OnInit } from '@angular/core';
import { artistIds } from '../Models/artistData';
import { getTrackNamesFromArtist } from 'src/services/getTrackNames';

@Component({
  selector: 'app-competitive',
  templateUrl: './competitive.component.html',
  styleUrls: ['./competitive.component.css']
})
export class CompetitiveComponent implements OnInit{
  artist_ids:Map<string, string> = new Map();
  artist_name:string = "";
  track_name:string = "";

  constructor() {
    this.artist_ids = artistIds
  }

  ngOnInit(): void {
    this.selectRandomTrack();
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


  skipTrack(): void{
    this.selectRandomTrack();
  }

}
