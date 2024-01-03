import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {AsyncPipe, KeyValuePipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {PlaylistService} from "../../services/playlist/playlist.service";
import {Playlist} from "../../models/playlist";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgForOf,
    KeyValuePipe,
    NgOptimizedImage,
    NgIf,
    MatCheckboxModule,
    MatButtonModule,
    AsyncPipe
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  providers: [UserService, HttpClientModule],
})
export class UserComponent implements OnInit {
  playlists: Playlist[] = [];

  constructor(private playlistService: PlaylistService) {

  }

  ngOnInit() {
    this.playlistService.getPlaylists().subscribe(
      res => this.playlists = res.items
    );

  }

}
