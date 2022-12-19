import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './app.module';
import { Song } from './song';

@Injectable()
export class LoginService {

  constructor(public router: Router) { }

  static prevUrl: string = ""

  static isLoggedIn: boolean = false;
  static loggedInAs: User;
  static favoriteSongs: Song[] = [new Song(1, "name1", "artist1"), new Song(2, "name2", "artist2"), new Song(3, "name3", "artist3")];
}
