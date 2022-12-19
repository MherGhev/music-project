import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Song } from '../song';
@Component({
  selector: 'app-my-music',
  templateUrl: './my-music.component.html',
  styleUrls: ['./my-music.component.css']
})
export class MyMusicComponent {
  public songs: Song[] = LoginService.favoriteSongs
  constructor() {  }

}