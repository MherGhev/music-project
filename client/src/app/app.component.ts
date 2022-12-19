import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'music-project';

  constructor(public router: Router) { }

  savePrevRoute() {
    const currentUrl = this.router.url
    const urlTree = this.router.parseUrl(this.router.url);
    urlTree.queryParams["previousUrl"] = currentUrl;
    LoginService.prevUrl = urlTree.queryParams["previousUrl"];
  }

}
