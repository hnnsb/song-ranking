import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User | undefined;

  constructor(public router: Router, private http: HttpClient) {
  }

  getUser() {
    return this.http.get<User>(
      `${environment.spotifyApiUrl}/me`,
      {headers: this.headerWithToken()}
    )
      // .subscribe(res => this.currentUser = res)
  }

  getPlaylists() {
    const playlistUrl = new URL(`${environment.spotifyApiUrl}/me/playlists`)
    const params = {
      limit:"50",
      offset:"0"
    }
    playlistUrl.search = new URLSearchParams(params).toString()
    return this.http.get(
      playlistUrl.toString(),
      {headers: this.headerWithToken()}
    )
  }

  headerWithToken() {
    return {'Authorization': `Bearer ${localStorage.getItem("access_token")}`}
  }
}
