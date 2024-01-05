import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../../services/playlist/playlist.service";
import {Track} from "../../models/Spotify/track";
import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {TrackEntryComponent} from "../../components/track-entry/track-entry.component";
import {RankingComponent} from "../../components/ranking/ranking.component";
import {TrackCardComponent} from "../../components/track-card/track-card.component";
import {EloService} from "../../services/elo/elo.service";
import {TrackEntry} from "../../models/track-entry";
import {Observable, of} from "rxjs";
import {MatchUp} from "../../models/match-up";

@Component({
  selector: 'app-ranking-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    TrackEntryComponent,
    RankingComponent,
    TrackCardComponent,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './ranking-page.component.html',
  styleUrl: './ranking-page.component.css'
})
export class RankingPageComponent implements OnInit {
  trackEntries$: Observable<TrackEntry[]> = of([]);
  matchUp: MatchUp | null = null;

  constructor(private playlistService: PlaylistService, private eloService: EloService) {
  }

  ngOnInit() {
    let tracks: Track[] = []
    this.playlistService.getSongs().subscribe(res => {
      res.forEach(playlist => {
        tracks.push(...playlist.map((item) => item.track))
      })
      this.eloService.setTracks(tracks)
    });

    this.trackEntries$ = this.eloService.getTrackEntries()
    this.eloService.getMatchUp().subscribe(matchUp =>
      this.matchUp = matchUp
    )
  }

  chooseWinner(winner: number) {
    this.eloService.updateRanking(winner)
  }
}
