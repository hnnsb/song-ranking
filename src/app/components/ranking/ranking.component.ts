import {Component, Input} from '@angular/core';
import {DecimalPipe, NgForOf} from "@angular/common";
import {TrackEntryComponent} from "../track-entry/track-entry.component";
import {TrackEntry} from "../../models/track-entry";

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [
    NgForOf,
    TrackEntryComponent,
    DecimalPipe
  ],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.css'
})
export class RankingComponent {
  @Input({required: true}) trackEntries: TrackEntry[] | null = [];
}
