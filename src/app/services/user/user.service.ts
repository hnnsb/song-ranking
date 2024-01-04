import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {User} from "../../models/user";
import {BehaviorSubject, distinctUntilChanged, map, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser = this.currentUserSubject
    .asObservable().pipe(distinctUntilChanged());

  public isLoggedIn = this.currentUser.pipe(map((user) => !!user));

  constructor(
    private http: HttpClient,
  ) {
  }

  ngOnInit() {
  }

  login() {
    return this.http.get<User>(
      `${environment.spotifyApiUrl}/me`,
      {headers: this.headerWithToken()}
    ).pipe(tap(user => this.currentUserSubject.next(user)));
  }

  getUser() {
    return this.http.get<User>(
      `${environment.spotifyApiUrl}/me`,
      {headers: this.headerWithToken()}
    ).pipe(tap(user => this.currentUserSubject.next(user)));
  }


  headerWithToken() {
    return {'Authorization': `Bearer ${localStorage.getItem("access_token")}`}
  }


}