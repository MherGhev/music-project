import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { first } from 'rxjs';
import { Song } from '../song';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent {

  public discoverSongs: Song[] = [];

  constructor(private http: HttpClient) {
    http.get<Song[]>("http://localhost:3001/discover").pipe(first()).subscribe(data => {
      //@ts-ignore
      data.forEach(obj => {
        obj = Song.toSong(obj)
        this.discoverSongs.push(obj);
      });
    })
  }
}
