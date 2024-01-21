import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {generateRandomString} from "../../util/pcke-code-challenge";
import {TokenResponse} from "../../models/Spotify/tokenResponse";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserService} from "../user/user.service";
import {PckeService} from "../pcke/pcke.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  codeVerifier = generateRandomString(64);
  codeChallenge: string = "";

  constructor(private http: HttpClient,
              private userService: UserService,
              private router: Router,
              private pckeService: PckeService) {
  }

  // PCKE Flow:
  // 1. Generate code verifier
  // -> PCKE Service
  // 2. Hash and encode code verifier to get code challenge
  // -> PCKE Service

  // 3. Authorize code challenge with Spotify Api
  async authorize() {
    const authUrl = new URL(`${environment.spotifyAuthUrl}`)
    const scope = 'user-read-private user-read-email playlist-modify-public playlist-modify-private';

    const params = {
      response_type: "code",
      client_id: `${environment.spotifyClientId}`,
      scope,
      code_challenge_method: "S256",
      code_challenge: await this.pckeService.getCodeChallenge(),
      redirect_uri: `${environment.redirectUri}`
    }
    authUrl.search = new URLSearchParams(params).toString()
    window.location.href = authUrl.toString()
  }

  // 4. Request access token
  request_token(code: string | null) {
    if (code != null) {
      const tokenUrl = new URL(`${environment.spotifyTokenUrl}`)
      const params = {
        grant_type: "authorization_code",
        code,
        redirect_uri: `${environment.redirectUri}`,
        client_id: `${environment.spotifyClientId}`,
        code_verifier: this.pckeService.getCodeVerifier()!
      }

      this.http.post<TokenResponse>(tokenUrl.toString(), new URLSearchParams(params),
        {headers: {"Content-Type": "application/x-www-form-urlencoded"}}
      ).subscribe({
          next: res => {
            localStorage.setItem("access_token", res.access_token);
            localStorage.setItem("refresh_token", res.refresh_token!);

            this.userService.getUser().subscribe({
              next: () => this.router.navigate(["/"]),

            })
          },
          error: (err) => {
            this.logout()
            console.log("auth failed")
            console.log(err)
            // this.authorize().then()
          }
        }
      )
    } else {
      // User aborted access token sequence
      this.router.navigate(["/"]).then();
    }
  }

  logout() {
    this.pckeService.purgeTokens();
    this.userService.purgeUser();
    this.router.navigate(["/"]).then();
  }
}
