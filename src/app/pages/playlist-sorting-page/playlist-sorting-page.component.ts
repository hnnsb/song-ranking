import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {TRACK} from "../../../stories/data/track";
import {TrackEntryComponent} from "../../components/track-entry/track-entry.component";
import {CategoryContainerComponent} from "../../components/category-container/category-container.component";

@Component({
  selector: 'app-playlist-sorting-page',
  standalone: true,
  imports: [NgForOf, TrackEntryComponent, CategoryContainerComponent],
  templateUrl: './playlist-sorting-page.component.html',
  styleUrl: './playlist-sorting-page.component.css'
})
export class PlaylistSortingPageComponent {
  source: any[] = [TRACK, TRACK];
  targets: any[] = [];

  addCategory() {
    this.targets.push({name: "New Category", tracks: []})
  }
}
