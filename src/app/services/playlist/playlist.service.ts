import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {forkJoin, map, Observable} from "rxjs";
import {Track} from "../../models/Spotify/track";
import {Playlist} from "../../models/Spotify/playlist";


@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
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

    return this.http.get<{ items: Playlist[] }>(playlistUrl.toString())
      .pipe(map(res => res.items))
  }

  getSongsOfSelected(): Observable<Track[]> {
    const playlistSongs = this.selectedPlaylistsLinks.map(
      (link: string) => this.getSongsOfPlaylist(link)
    );
    return forkJoin(playlistSongs).pipe(map(res => res.flat()))
  }


  getSongsOfPlaylist(url: string): Observable<Track[]> {
    return this.http.get<{ items: { track: Track }[] }>(url)
      .pipe(
        map(trackList =>
          trackList.items.map(item => item.track)
        )
      );
  }

  savePlaylist(name: string, userId: string, trackUris: string[]) {
    let body = {
      name: name,
      description: `The top ${trackUris.length} of your selected songs`
    }
    this.http.post<Playlist>(
      `${environment.spotifyApiUrl}/users/${userId}/playlists`,
      body,
    ).subscribe(playlist => {
      console.log("Playlist created", playlist)
      this.http.post(
        playlist.tracks.href,
        {"uris": trackUris, "position": 0},
      ).subscribe(res => console.log("added tracks", res))
    })
  }

}
