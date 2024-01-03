import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LoginService} from "../../services/login/login.service";

/**
 * Auth Component is only used as a callback target by Spotify.
 * After a user authorizes this app with Spotify, the access token is requested.
 * */
@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private loginService: LoginService) {
  }

  public ngOnInit() {
    const code = this.route.snapshot.queryParamMap.get('code')
    this.loginService.request_token(code)
  }
}
