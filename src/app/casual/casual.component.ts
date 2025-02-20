import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-casual',
  templateUrl: './casual.component.html',
  styleUrls: ['./casual.component.css']
})
export class CasualComponent implements OnInit {
  artistName: string = '';
  artistId: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Read query parameters when component initializes. Subscribe is listening to observables such as route parameters which can change dynamically
    this.route.queryParams.subscribe(params => {
      this.artistName = params['artistName'] || ''; // Get artist name
      this.artistId = params['artistId'] || '';
      console.log(`Received artist: ${this.artistName}`);
      console.log(`Received artist id: ${this.artistId}`);
    });
  }

}
