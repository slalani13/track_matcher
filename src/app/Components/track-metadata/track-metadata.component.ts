import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-metadata',
  templateUrl: './track-metadata.component.html',
  styleUrls: ['./track-metadata.component.css']
})
export class TrackMetadataComponent implements OnInit{
  @Input() artist:string = "default"
  @Input() track_name:string = "default track name"

  constructor() {
    
  }

  ngOnInit(): void {
      
  }

}
