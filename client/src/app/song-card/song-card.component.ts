import { Component, Input } from '@angular/core';
import { Song } from '../app.module';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
  
export class SongCardComponent {
  @Input() public song!: Song;
}
