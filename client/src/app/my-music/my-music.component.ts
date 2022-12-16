import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Song } from '../app.module';

@Component({
  selector: 'app-my-music',
  templateUrl: './my-music.component.html',
  styleUrls: ['./my-music.component.css']
})
export class MyMusicComponent {
  public songs: Song[] = [];
  constructor(public http: HttpClient) {
    console.log("in the constructor");
    this.http.get<any>("localhost:3001/discover").subscribe(data => console.log(data));
    // ????


    for (let i = 1; i <= 10; i++) {
      this.songs.push(new Song(i, `name${i}`, `artist${i}`, "https://www.youtube.com/watch?v=yBm4K00SMEk", "This is a description"));
    }
  }
  ngOnInit() {
    console.log("In init");
  }
}