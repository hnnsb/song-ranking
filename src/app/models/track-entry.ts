import {Track} from "./Spotify/track";

export class TrackEntry {
  track: Track;
  elo: number;
  matches: number = 0;

  constructor(track: Track, elo: number = 1200) {
    this.track = track;
    this.elo = elo;
  }
}
