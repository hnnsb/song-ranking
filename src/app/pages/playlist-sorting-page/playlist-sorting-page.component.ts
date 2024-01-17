import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {TrackEntryComponent} from "../../components/track-entry/track-entry.component";
import {CategoryContainerComponent} from "../../components/category-container/category-container.component";
import {PlaylistService} from "../../services/playlist/playlist.service";
import {Track} from "../../models/Spotify/track";
import {MatCardModule} from "@angular/material/card";
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-playlist-sorting-page',
  standalone: true,
  imports: [NgForOf, TrackEntryComponent, CategoryContainerComponent, MatCardModule, CdkDropList, CdkDropListGroup, CdkDrag],
  templateUrl: './playlist-sorting-page.component.html',
  styleUrl: './playlist-sorting-page.component.css'
})
export class PlaylistSortingPageComponent implements OnInit {
  source: Track[] = [];
  targets: { name: string, tracks: Track[] }[] = [];

  constructor(private playlistService: PlaylistService) {
  }

  ngOnInit() {
    this.playlistService.getSongsOfSelected().subscribe(res => this.source = res);
  }

  addCategory() {
    this.targets.push({name: "New Category", tracks: []})
  }

  drop(event: CdkDragDrop<Track[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
  }

}
