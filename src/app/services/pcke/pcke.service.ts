import {Injectable} from '@angular/core';
import {base64encode, generateRandomString, sha256} from "../../pcke-code-challenge";

@Injectable({
  providedIn: 'root'
})
export class PckeService {
  codeVerifier = generateRandomString(64);
  codeChallenge: string = "";

  constructor() {
  }

  async initialize() {
    const hashed = await sha256(this.codeVerifier)
    this.codeChallenge = base64encode(hashed)
    window.localStorage.setItem("code_verifier", this.codeVerifier)
  }
}
