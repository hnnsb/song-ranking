import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {LoginService} from "../../services/login/login.service";
import {UserService} from "../../services/user/user.service";
import {AsyncPipe, NgIf} from "@angular/common";
import {PlaylistGridComponent} from "../../components/playlist-grid/playlist-grid.component";
import {Playlist} from "../../models/Spotify/playlist";
import {PlaylistService} from "../../services/playlist/playlist.service";

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  imports: [
    AsyncPipe,
    NgIf,
    RouterLink,
    PlaylistGridComponent
  ],
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  playlists: { playlist: Playlist, selected: boolean }[] = [];
  selectCount = 0

  constructor(public router: Router,
              public loginService: LoginService,
              public userService: UserService,
              private playlistService: PlaylistService) {
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


  }

  handleSelectEvent(count: number) {
    this.selectCount = count;
  }

  login() {
    this.loginService.authorize().then();
  }

  goToRanking() {
    this.choosePlaylists();
    this.router.navigate(["ranking"]).then()
  }

  goToSorting() {
    this.choosePlaylists();
    this.router.navigate(["sorting"]).then()
  }
}
