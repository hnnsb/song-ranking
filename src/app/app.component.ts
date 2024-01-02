import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "./services/login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'song-ranking';
  isInitialized = false;

  constructor(public router: Router,
              public loginService: LoginService) {
    if (!this.isInitialized) {
      this.loginService.initialize().then(() => this.isInitialized = true)
    }
  }


}
