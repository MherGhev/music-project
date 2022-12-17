import { Component } from '@angular/core';
import { Song } from '../app.module';
@Component({
  selector: 'app-my-music',
  templateUrl: './my-music.component.html',
  styleUrls: ['./my-music.component.css']
})
export class MyMusicComponent {
  public songs: Song[] = [];
  constructor() {
    for (let i = 1; i <= 10; i++) {
      this.songs.push(new Song(i, `name${i}`, `artist${i}`, "https://www.youtube.com/watch?v=yBm4K00SMEk", "This is a description"));
    }
  }

}