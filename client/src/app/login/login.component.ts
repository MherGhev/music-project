import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public router: Router){}

  login(usernameInput: HTMLInputElement, passwordInput: HTMLInputElement) {
    usernameInput.value = "";
    passwordInput.value = "";
    LoginService.isLoggedIn = true;
    this.router.navigateByUrl(LoginService.prevUrl);
  }
}
