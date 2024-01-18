import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Track} from "../../models/Spotify/track";

@Component({
  selector: 'app-track-entry',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './track-entry.component.html',
  styleUrl: './track-entry.component.css'
})
export class TrackEntryComponent {
  @Input({required: true}) track: Track | null = null;
  @Input() size: number = 50
}
