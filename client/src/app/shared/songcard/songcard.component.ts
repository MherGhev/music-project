import { Component, Input } from '@angular/core';
import { Song } from 'src/app/song';
import { SongCardStyleDirective } from 'src/app/song-card-style.directive';

@Component({
  selector: 'app-songcard',
  templateUrl: './songcard.component.html',
  styleUrls: ['./songcard.component.css']
})
  
export class SongcardComponent {
  @Input() song!: Song;
}
