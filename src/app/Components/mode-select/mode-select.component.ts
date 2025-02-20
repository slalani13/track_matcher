import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mode-select',
  templateUrl: './mode-select.component.html',
  styleUrls: ['./mode-select.component.css']
})
export class ModeSelectComponent implements OnInit{
  @Input() active:boolean = false;
  @Output() activeChange = new EventEmitter<boolean>();

  selectedMode: string = '';
  selectedArtistId: string = ''; // Now stores artist ID instead of name

  // List of artists as objects
  artists = [
    { id: '06HL4z0CvFAxyc27GXpf02', name: 'Taylor Swift' },
    { id: '4dpARuHxo51G3z768sgnrY', name: 'Adele' },
    { id: '6eUKZXaKkcviH0Ku9w2n3V', name: 'Ed Sheeran' },
  ];
  
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

   ngOnChanges(changes: SimpleChanges): void {
    if (changes['active']) {
      this.activeChange.emit(changes['active'].currentValue);
    }
  }

  closePopup() : void {
    this.active = false;
  }

  // Handle selection of mode
  selectMode(mode: string) {
    this.selectedMode = mode;
    if (this.selectedMode == 'competitive') {
      console.log('Navigating to Competitive...');
      this.closePopup();
      this.selectedMode = '';
      this.router.navigate(['/competitive']);
    }
  }
  
  submitArtistName() {
    if (this.selectedMode == 'casual' && this.selectedArtistId) {
      // Get the artist name from the selected ID
      const selectedArtist = this.artists.find(artist => artist.id === this.selectedArtistId);
      console.log(`navigating to casual game with artist ${selectedArtist?.name}`);
      this.closePopup();
      this.selectedMode = '';
      this.router.navigate(['/casual'], { queryParams: { artistId: this.selectedArtistId, artistName: selectedArtist?.name } });
    }
  }

}
