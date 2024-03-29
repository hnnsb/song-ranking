import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../../services/playlist/playlist.service";
import {AsyncPipe, NgOptimizedImage} from "@angular/common";
import {TrackEntryComponent} from "../../components/track-entry/track-entry.component";
import {RankingComponent} from "../../components/ranking/ranking.component";
import {TrackCardComponent} from "../../components/track-card/track-card.component";
import {EloService} from "../../services/elo/elo.service";
import {TrackEntry} from "../../models/track-entry";
import {Observable, of} from "rxjs";
import {MatchUp} from "../../models/match-up";
import {MatCardModule} from "@angular/material/card";
import {PlaylistSaveModalComponent} from "../../components/playlist-save-modal/playlist-save-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UserService} from "../../services/user/user.service";
import {CdkDrag} from "@angular/cdk/drag-drop";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";

@Component({
  selector: 'app-ranking-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TrackEntryComponent,
    RankingComponent,
    TrackCardComponent,
    AsyncPipe,
    MatCardModule,
    CdkDrag,
    NgxSkeletonLoaderModule,
  ],
  templateUrl: './ranking-page.component.html',
  styleUrl: './ranking-page.component.css'
})
export class RankingPageComponent implements OnInit {
  trackEntries$: Observable<TrackEntry[]> = of([]);
  matchUp: MatchUp | null = null;

  constructor(private playlistService: PlaylistService,
              private eloService: EloService,
              private modalService: NgbModal,
              private userService: UserService) {
  }

  ngOnInit() {
    this.playlistService.getSongsOfSelected().subscribe(songs =>
      this.eloService.setTracks(songs)
    );

    this.trackEntries$ = this.eloService.getTrackEntries()
    this.eloService.getMatchUp().subscribe(matchUp =>
      this.matchUp = matchUp
    )
  }

  play(event: any) {
    let audios = document.getElementsByTagName('audio')
    //NOSONAR(typescript:S4138)
    for (let i = 0; i < audios.length; i++) {
      if (audios[i] !== event.target) {
        audios[i].pause()
      }
    }
  }

  chooseWinner(winner: number) {
    this.eloService.updateRanking(winner)
  }

  savePlaylist() {
    const modalRef = this.modalService.open(PlaylistSaveModalComponent)

    modalRef.result.then(form =>
      this.eloService.getTrackEntries().subscribe(res =>
        this.userService.currentUser.subscribe(user =>
          this.playlistService.savePlaylist(
            form.name,
            user!.id,
            res.map(trackEntry => trackEntry.track.uri).slice(0, form.amount)
          )
        )
      ).unsubscribe()
    );
  }
}
