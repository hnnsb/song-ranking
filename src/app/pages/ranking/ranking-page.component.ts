import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../../services/playlist/playlist.service";
import {Track} from "../../models/track";
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-ranking-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf
  ],
  templateUrl: './ranking-page.component.html',
  styleUrl: './ranking-page.component.css'
})
export class RankingPageComponent implements OnInit {
  tracks: { track: Track, elo: number }[] = [];

  constructor(private playlistService: PlaylistService) {
  }

  ngOnInit() {
    this.playlistService.getSongs().subscribe(res => {
        res.forEach(playlist => {
          this.tracks.push(...playlist.items.map((item) => {
            return {track: item.track, elo: 1200}
          }))
        });
      }
    )
  }

}
