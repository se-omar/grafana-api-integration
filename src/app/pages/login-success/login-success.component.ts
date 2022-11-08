import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css'],
})
export class LoginSuccessComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}

  IamLogout() {
    this.authenticationService.logout();
  }

  getToken() {
    console.log(this.authenticationService.getAccessToken());
    // console.log(localStorage.getItem('access_token'));
  }

  verifyToken() {
    console.log(this.authenticationService.hasValidAccessToken());
  }

  ngOnInit(): void {}
}
