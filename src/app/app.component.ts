import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {PckeService} from "./services/pcke/pcke.service";
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
              public pckeService: PckeService,
              public loginService: LoginService) {
    this.pckeService.initialize().then(() => this.isInitialized = true)
  }


}
