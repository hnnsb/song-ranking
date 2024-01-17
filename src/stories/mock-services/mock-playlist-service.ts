import {PlaylistService} from "../../app/services/playlist/playlist.service";
import {of} from "rxjs";
import {TRACK} from "../data/track";

export class MockPlaylistService implements Partial<PlaylistService> {
  getSongsOfSelected = () => {
    return of([TRACK, TRACK])
  }
}
