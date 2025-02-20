import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-data-competitive',
  templateUrl: './track-data-competitive.component.html',
  styleUrls: ['./track-data-competitive.component.css']
})
export class TrackDataCompetitiveComponent implements OnInit {
  @Input() artist:string = "default"
  @Input() track_name:string = "default track name"

  constructor() { }

  ngOnInit(): void {
  }

}
