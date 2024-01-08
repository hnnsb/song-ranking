import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {User} from "../../models/Spotify/user";
import {BehaviorSubject, distinctUntilChanged, map, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser = this.currentUserSubject
    .asObservable().pipe(distinctUntilChanged());

  public isLoggedIn = this.currentUser.pipe(map((user) => !!user));

  constructor(private http: HttpClient) {
  }

  getUser() {
    return this.http.get<User>(
      `${environment.spotifyApiUrl}/me`,
    ).pipe(tap(user => this.currentUserSubject.next(user)));
  }

  purgeUser() {
    this.currentUserSubject.next(null)
  }
}
