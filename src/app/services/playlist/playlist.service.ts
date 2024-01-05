import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, forkJoin, tap} from "rxjs";
import {Track} from "../../models/Spotify/track";


@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private currentPlaylistsSubject = new BehaviorSubject<any | null>(null)
  public currentPlaylists = this.currentPlaylistsSubject.asObservable()

  selectedPlaylistsLinks: string[] = [];


  constructor(private http: HttpClient) {
  }

  getPlaylists() {
    const playlistUrl = new URL(`${environment.spotifyApiUrl}/me/playlists`)
    const params = {
      limit: "50",
      offset: "0"
    }
    playlistUrl.search = new URLSearchParams(params).toString()
    return this.http.get<any>(
      playlistUrl.toString(),
      {headers: this.headerWithToken()}
    ).pipe(tap((res) => this.currentPlaylistsSubject.next(res)))
  }

  getSongs() {
    const observables = this.selectedPlaylistsLinks.map(
      (link: string) => this.getSongsForPlaylist(link)
    );
    return forkJoin(observables)
  }


  getSongsForPlaylist(url: string) {
    return this.http.get<{ items: { track: Track }[] }>(url, {headers: this.headerWithToken()})
  }

  headerWithToken() {
    return {'Authorization': `Bearer ${localStorage.getItem("access_token")}`}
  }

}
