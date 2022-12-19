import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyMusicComponent } from './my-music/my-music.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { DiscoverModule } from './discover/discover.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';



export class User {
  static isLoggedIn: boolean = false;
  static loggedInAs: User;
  public username: String;
  public password: String;
  constructor(username: String, password: String) {
    this.username = username;
    this.password = password;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyMusicComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  exports: [],
  providers: [LoginService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    DiscoverModule,
  ]
})
export class AppModule { }
