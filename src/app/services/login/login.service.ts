import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {base64encode, generateRandomString, sha256} from "../../pcke-code-challenge";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  codeVerifier = generateRandomString(64);
  codeChallenge: string = "";

  constructor() {
  }

  async initialize() {
    const hashed = await sha256(this.codeVerifier)
    this.codeChallenge = base64encode(hashed)
    window.localStorage.setItem("code_verifier", this.codeVerifier)
  }

  login() {
    const authUrl = new URL(`${environment.spotifyAuthUrl}`)
    const scope = 'user-read-private user-read-email';

    const params = {
      response_type: "code",
      client_id: `${environment.spotifyClientId}`,
      scope,
      code_challenge_method: "S256",
      code_challenge: this.codeChallenge,
      redirect_uri: `${environment.redirectUri}`
    }
    authUrl.search = new URLSearchParams(params).toString()
    window.location.href = authUrl.toString()
  }
}
