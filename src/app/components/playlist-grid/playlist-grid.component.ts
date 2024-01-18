import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PlaylistEntryComponent} from "../playlist-entry/playlist-entry.component";
import {NgStyle} from "@angular/common";
import {Playlist} from "../../models/Spotify/playlist";

@Component({
  selector: 'app-playlist-grid',
  standalone: true,
  imports: [
    PlaylistEntryComponent,
    NgStyle
  ],
  templateUrl: './playlist-grid.component.html',
  styleUrl: './playlist-grid.component.css'
})
export class PlaylistGridComponent {
  @Input() playlists: { playlist: Playlist, selected: boolean }[] = [];

  @Output() selectEvent = new EventEmitter<number>();

  private selectCount: number = 0;

  getColumnStyles() {
    const width = document.getElementById("playlists")!.offsetWidth

    const columnWidth = 300; // Adjust the width based on your design
    const columnCount = Math.floor(width / columnWidth); // Adjust the number 5 based on your design
    const containerPadding = 4; // Adjust padding as needed
    const totalWidth = columnCount * columnWidth + containerPadding * (columnCount - 1);
    return {
      'column-count': columnCount,
      'display': 'grid',
      'max-width': '100vw',
      'grid-template-columns': `repeat(${columnCount}, ${columnWidth}px)`,
      'grid-gap': '20px', // Adjust the gap between columns
      'width': `${totalWidth}px`,
    };
  }

  select(selected: boolean, item: { playlist: Playlist; selected: boolean }) {
    item.selected = selected
    if (selected) {
      this.selectCount += item.playlist.tracks.total
    } else {
      this.selectCount -= item.playlist.tracks.total
    }
    this.selectEvent.emit(this.selectCount)
  }
}
