import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {PlaylistService} from "../../../services/playlist/playlist.service";
import {Playlist} from "../../../models/Spotify/playlist";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {PlaylistEntryComponent} from "../../../components/playlist-entry/playlist-entry.component";
import {PlaylistGridComponent} from "../../../components/playlist-grid/playlist-grid.component";

@Component({
  selector: 'app-playlists-page',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    NgIf,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    PlaylistEntryComponent,
    PlaylistGridComponent
  ],
  templateUrl: './playlists-page.component.html',
  styleUrl: './playlists-page.component.css',
  providers: [UserService, HttpClientModule],
})
export class PlaylistsPage implements OnInit {
  playlists: { playlist: Playlist, selected: boolean }[] = [];
  someSelected = false
  selectCount = 0

  constructor(private playlistService: PlaylistService, private router: Router) {

  }

  ngOnInit() {
    this.playlistService.getPlaylists().subscribe(
      res => {
        this.playlists = res.map(playlist => {
          return {playlist, selected: false}
        })
      }
    );
  }

  choosePlaylists() {
    this.playlistService.selectedPlaylistsLinks = this.playlists
      .filter(item => item.selected)
      .map(item => item.playlist.tracks.href)

    this.router.navigate(["ranking/songs"]).then()
  }

  handleSelectEvent(count: number) {
    this.selectCount = count;
    this.someSelected = this.playlists.some(item => item.selected)
  }

}
