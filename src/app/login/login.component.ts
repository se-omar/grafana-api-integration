import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}

  IamLogin() {
    this.authenticationService.login();
  }

  IamLogout() {
    this.authenticationService.logout();
  }

  getToken() {
    console.log(this.authenticationService.hasValidAccessToken());
  }
  ngOnInit(): void {
    // this.authenticationService.login();
  }
}
