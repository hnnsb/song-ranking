import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login/login.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public router: Router,
              public loginService: LoginService) {
    loginService.initialize().then()
  }

  login() {
    this.loginService.login();
  }
}
