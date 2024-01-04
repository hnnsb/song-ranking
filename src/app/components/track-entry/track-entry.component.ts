import {Component, Input} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {Track} from "../../models/track";

@Component({
  selector: 'app-track-entry',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    NgForOf
  ],
  templateUrl: './track-entry.component.html',
  styleUrl: './track-entry.component.css'
})
export class TrackEntryComponent {
  @Input({required: true}) track: Track | null = null;
  @Input() size: number = 50
}
