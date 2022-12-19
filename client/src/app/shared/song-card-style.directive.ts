import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Song } from '../song';

function isSongInArray(song: Song, songArray: Song[]): boolean {
  for (let i = 0; i < songArray.length; i++) {
    if (song.equals(songArray[i])) {
      return true;
    }
  }
  return false;
}


@Directive({
  selector: '[appSongCardStyle]'
})
export class SongCardStyleDirective implements OnInit {

  @Input() song!: Song;
  @Input() moduleName!: string;
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    if (this.moduleName === "app-module") {
      this.el.nativeElement.style.color = "red"; // songs in mymusic are already in LoginService.favoriteSongs, so there is no need to iterate over them.
    } else {
      if (isSongInArray(this.song, LoginService.favoriteSongs)) {
        this.el.nativeElement.style.color = "red";
      }
    }

  }
}