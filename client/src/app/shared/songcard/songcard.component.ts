import { Component, Input } from '@angular/core';
import { Song } from 'src/app/app.module';

@Component({
  selector: 'app-songcard',
  templateUrl: './songcard.component.html',
  styleUrls: ['./songcard.component.css']
})
  
export class SongcardComponent {
  @Input() song!: Song;
}
