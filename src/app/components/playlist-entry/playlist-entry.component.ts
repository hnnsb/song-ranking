import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {NgOptimizedImage} from "@angular/common";
import {Playlist} from "../../models/Spotify/playlist";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-playlist-entry',
  standalone: true,
  imports: [
    MatCheckboxModule,
    NgOptimizedImage,
    FormsModule,
    MatCardModule
  ],
  templateUrl: './playlist-entry.component.html',
  styleUrl: './playlist-entry.component.css'
})
export class PlaylistEntryComponent {
  @Input({required: true}) playlist: Playlist | undefined;
  @Output() selectEvent = new EventEmitter<boolean>();
  selected = false;

  changeStatus() {
    this.selectEvent.emit(this.selected)
  }
}
