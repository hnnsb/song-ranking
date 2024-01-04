import {Component, Input} from '@angular/core';
import {Track} from "../../models/track";
import {MatCardModule} from "@angular/material/card";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-track-card',
  standalone: true,
  imports: [
    MatCardModule,
    NgIf,
    NgOptimizedImage,
    NgForOf
  ],
  templateUrl: './track-card.component.html',
  styleUrl: './track-card.component.css'
})
export class TrackCardComponent {
  @Input() track: Track | null = null;
}
