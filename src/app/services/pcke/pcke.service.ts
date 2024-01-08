import {Injectable} from '@angular/core';
import {base64encode, generateRandomString, sha256} from "../../util/pcke-code-challenge";
import {UserService} from "../user/user.service";

const CODE_VERIFIER: string = "code_verifier";
const ACCESS_TOKEN: string = "access_token";
const REFRESH_TOKEN: string = "refresh_token";

@Injectable({
  providedIn: 'root'
})
export class PckeService {
  codeVerifier = generateRandomString(64);
  codeChallenge: string | null = null;

  constructor(private userService: UserService) {
  }

  async initialize() {
    if (localStorage.getItem("access_token") != null) {
      this.userService.getUser().subscribe()
      return
    }

    const hashed = await sha256(this.codeVerifier)
    this.codeChallenge = base64encode(hashed)
    this.setCodeVerifier(this.codeVerifier)
  }


  purgeTokens() {
    this.destroyAccessToken()
    this.destroyRefreshToken()
  }

  async getCodeChallenge() {
    if (this.codeChallenge != null) {
      return this.codeChallenge
    }
    return base64encode(await sha256(this.codeVerifier))
  }

  getCodeVerifier() {
    return window.localStorage.getItem(CODE_VERIFIER);
  }

  setCodeVerifier(codeVerifier: string) {
    window.localStorage.setItem(CODE_VERIFIER, codeVerifier);
  }

  destroyCodeVerifier() {
    window.localStorage.removeItem(CODE_VERIFIER)
  }

  getAccessToken() {
    return window.localStorage.getItem(ACCESS_TOKEN);
  }

  setAccessToken(accessToken: string) {
    window.localStorage.setItem(ACCESS_TOKEN, accessToken);
  }

  destroyAccessToken() {
    window.localStorage.removeItem(ACCESS_TOKEN)
  }

  getRefreshToken() {
    return window.localStorage.getItem(REFRESH_TOKEN);
  }

  setRefreshToken(refreshToken: string) {
    window.localStorage.setItem(REFRESH_TOKEN, refreshToken);
  }

  destroyRefreshToken() {
    window.localStorage.removeItem(REFRESH_TOKEN)
  }
}
