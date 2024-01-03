import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login/login.service";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public router: Router,
              public loginService: LoginService) {
  }

  login() {
    this.loginService.authorize();
  }
}
