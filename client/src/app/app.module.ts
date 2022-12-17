import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyMusicComponent } from './my-music/my-music.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';

export class Song {
  public id: number;
  public name: string;
  public artist: string;
  public ytLink: string;
  public description: string;
  constructor(id: number, name: string, artist: string, ytLink: string, description: string) {
    this.id = id;
    this.name = name;
    this.artist = artist;
    this.ytLink = ytLink;
    this.description = description;
  }
  static toSong(object: Object): Song {
    //@ts-ignore
    return new Song(object.id, object.name, object.artist, object.ytLink, object.description);
  }
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyMusicComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
