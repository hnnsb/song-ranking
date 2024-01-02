import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {PckeService} from "../../services/pcke/pcke.service";
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
              public pckeService: PckeService,
              public loginService: LoginService) {
  }

  login(code: string) {
    this.loginService.login(code);
  }
}
