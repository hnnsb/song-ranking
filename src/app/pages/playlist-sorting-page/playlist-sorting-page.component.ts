import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {TrackEntryComponent} from "../../components/track-entry/track-entry.component";
import {CategoryContainerComponent} from "../../components/category-container/category-container.component";
import {PlaylistService} from "../../services/playlist/playlist.service";
import {Track} from "../../models/Spotify/track";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-playlist-sorting-page',
  standalone: true,
  imports: [NgForOf, TrackEntryComponent, CategoryContainerComponent, MatCardModule],
  templateUrl: './playlist-sorting-page.component.html',
  styleUrl: './playlist-sorting-page.component.css'
})
export class PlaylistSortingPageComponent implements OnInit {
  source: Track[] = [];
  targets: any[] = [];

  constructor(private playlistService: PlaylistService) {
  }

  ngOnInit() {
    this.playlistService.getSongsOfSelected().subscribe(res => this.source = res);
  }

  addCategory() {
    this.targets.push({name: "New Category", tracks: []})
  }
}
