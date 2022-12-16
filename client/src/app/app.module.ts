import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyMusicComponent } from './my-music/my-music.component';
import { DiscoverComponent } from './discover/discover.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SongCardComponent } from './song-card/song-card.component';

export class Song{
  public id: number;
  public name: string;
  public artist: string;
  public ytLink: string;
  public description: string;
  constructor(id: number, name: string, artist: string, ytLink: string, description: string ) {
    this.id = id;
    this.name = name;
    this.artist = artist;
    this.ytLink = ytLink;
    this.description = description;
  }
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyMusicComponent,
    DiscoverComponent,
    PageNotFoundComponent,
    SongCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
