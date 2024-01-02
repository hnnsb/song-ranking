import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {
  }

  login(codeChallenge: string) {
    const authUrl = new URL(`${environment.spotifyAuthUrl}`)
    const params = {
      response_type: "code",
      client_id: `${environment.spotifyClientId}`,
      code_challenge_method: "S256",
      code_challenge: codeChallenge,
      redirect_uri: `${environment.redirectUri}`
    }
    authUrl.search = new URLSearchParams(params).toString()
    window.location.href = authUrl.toString()
  }
}
