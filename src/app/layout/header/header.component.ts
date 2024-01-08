import {Component} from '@angular/core';
import {AsyncPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {UserService} from "../../services/user/user.service";
import {LoginService} from "../../services/login/login.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  currentUser$ = this.userService.currentUser;

  constructor(public userService: UserService, private loginService: LoginService) {
  }

  logout() {
    this.loginService.logout();
  }

  login() {
    this.loginService.authorize().then()
  }
}
