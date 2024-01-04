import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login/login.service";

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(public router: Router,
              public loginService: LoginService) {
  }

  login() {
    this.loginService.authorize();
  }
}
