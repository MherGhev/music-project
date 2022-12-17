import { Component } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { Song } from '../app.module';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent {
  
  public discoverMusicArray: Song[] = [];
  
  constructor(private connection: ConnectionService) {
    connection.getDiscoverMusic().subscribe(data => {
      // @ts-ignore
      data.forEach(object => {
        this.discoverMusicArray.push(Song.toSong(object));
      });      
    })
  }
}
