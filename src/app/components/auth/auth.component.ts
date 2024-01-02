import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {SpotifyApiResponse} from "../../models/spotifyApiResponse";
import {LoginService} from "../../services/login/login.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private loginService: LoginService,
              private http: HttpClient) {
  }

  public ngOnInit() {
    const code = this.route.snapshot.queryParamMap.get('code')

    if (code != null) {
      const tokenUrl = new URL(`${environment.spotifyTokenUrl}`)
      const params = {
        grant_type: "authorization_code",
        code,
        redirect_uri: `${environment.redirectUri}`,
        client_id: `${environment.spotifyClientId}`,
        code_verifier: window.localStorage.getItem("code_verifier")!
      }

      this.http.post<SpotifyApiResponse>(tokenUrl.toString(), new URLSearchParams(params),
        {headers: {"Content-Type": "application/x-www-form-urlencoded"}}
      ).subscribe(
        res => {
          localStorage.setItem("access_token", res.access_token);
          localStorage.setItem("refresh_token", res.refresh_token!);
          this.router.navigate(["/me"]).then()
        }
      )

    } else {
      // User aborted auth sequence
      this.router.navigate(["/"]).then()
    }
  }
}
