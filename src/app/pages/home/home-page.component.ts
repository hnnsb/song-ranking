import {Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {LoginService} from "../../services/login/login.service";
import {UserService} from "../../services/user/user.service";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  imports: [
    AsyncPipe,
    NgIf,
    RouterLink
  ],
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(public router: Router,
              public loginService: LoginService,
              public userService: UserService) {
  }

  login() {
    this.loginService.authorize().then();
  }

}
