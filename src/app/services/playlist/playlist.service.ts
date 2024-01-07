import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, forkJoin, map, tap} from "rxjs";
import {Track} from "../../models/Spotify/track";
import {Playlist} from "../../models/Spotify/playlist";


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
      (link: string) => this.getSongsForPlaylist(link).pipe(map(res => res.items))
    );
    return forkJoin(observables)
  }


  getSongsForPlaylist(url: string) {
    return this.http.get<{ items: { track: Track }[] }>(url, {headers: this.headerWithToken()})
  }

  savePlaylist(name: string, userId: string, trackUris: string[]) {
    let body = {
      name: name,
      description: `The top ${trackUris.length} of your selected songs`
    }
    this.http.post<Playlist>(
      `${environment.spotifyApiUrl}/users/${userId}/playlists`,
      body,
      {headers: this.headerWithToken()}
    ).subscribe(playlist => {
      console.log("Playlist created", playlist)
      this.http.post(
        playlist.tracks.href,
        {"uris": trackUris, "position": 0},
        {headers: this.headerWithToken()}
      ).subscribe(res => console.log("added tracks", res))
    })
  }

  headerWithToken() {
    return {'Authorization': `Bearer ${localStorage.getItem("access_token")}`}
  }
}
