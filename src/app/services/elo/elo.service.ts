import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Track} from "../../models/Spotify/track";
import {TrackEntry} from "../../models/track-entry";
import {MatchUp} from "../../models/match-up";
import {calcExpectation, calcNewRating} from "../../util/elo";


@Injectable({
  providedIn: 'root'
})
export class EloService {
  private trackEntries: TrackEntry[] = []
  private trackEntriesSubject = new BehaviorSubject<TrackEntry[]>(this.trackEntries);

  private matchUp: MatchUp | null = null;
  private matchUpSubject = new BehaviorSubject<MatchUp | null>(null);


  getTrackEntries(): Observable<TrackEntry[]> {
    return this.trackEntriesSubject.asObservable();
  }

  getMatchUp() {
    return this.matchUpSubject.asObservable();
  }

  generateMatchUp() {
    if (this.trackEntries.length < 2) {
      return
    }
    const totalWeight = this.trackEntries.reduce((sum, entry) => sum + 1 / (entry.matches + 1), 0);

    const chosenEntries = new Set<TrackEntry>();
    while (chosenEntries.size < 2) {
      const randomValue = Math.random() * totalWeight
      let cumulativeWeight = 0;

      for (const entry of this.trackEntries) {
        cumulativeWeight += 1 / (entry.matches + 1);
        if (randomValue <= cumulativeWeight) {
          chosenEntries.add(entry);
          entry.matches++;
          break;
        }
      }
    }
    let chosenList = [...chosenEntries.values()]
    this.matchUp = {a: chosenList[0], b: chosenList[1]}
    this.matchUpSubject.next(this.matchUp)
  }

  updateRanking(winner: number) {
    if (this.matchUp == null) {
      return;
    }
    let rA = this.matchUp.a.elo;
    let rB = this.matchUp.b.elo;

    let eA = calcExpectation(rA, rB);
    let eB = calcExpectation(rB, rA);

    let scoreA = winner == 1 ? 1 : 0;
    let scoreB = winner == 2 ? 1 : 0;

    let matchesA = this.matchUp.a.matches;
    let matchesB = this.matchUp.a.matches;

    let new_rA = calcNewRating(rA, eA, scoreA, matchesA);
    let new_rB = calcNewRating(rB, eB, scoreB, matchesB);

    this.matchUp.a.elo = new_rA;
    this.matchUp.b.elo = new_rB;

    this.updateTrackEntriesSubject();
    this.generateMatchUp();
  }

  updateTrackEntriesSubject() {
    this.trackEntriesSubject.next([...this.trackEntries.sort((a, b) =>
      b.elo - a.elo
    )]);
  }

  setTracks(tracks: Track[]) {
    this.trackEntries = tracks.map(track => {
      return new TrackEntry(track);
    })
    this.updateTrackEntriesSubject();
    this.generateMatchUp();
  }

}
