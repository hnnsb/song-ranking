import {Component, Input} from '@angular/core';
import {DecimalPipe, NgStyle} from "@angular/common";
import {TrackEntryComponent} from "../track-entry/track-entry.component";
import {TrackEntry} from "../../models/track-entry";
import {MatDividerModule} from "@angular/material/divider";
import {max} from "rxjs";

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [
    TrackEntryComponent,
    DecimalPipe,
    MatDividerModule,
    NgStyle
  ],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.css'
})
export class RankingComponent {
  @Input({required: true}) trackEntries: TrackEntry[] | null = [];
  @Input() maxHeight = 680;
  protected readonly max = max;
}
