import {Component, OnInit} from '@angular/core';
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
import {CategoryDeleteModal} from "../../components/category-delete-modal/category-delete-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CategorySaveModal} from "../../components/category-save-modal/category-save-modal.component";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-playlist-sorting-page',
  standalone: true,
  imports: [
    TrackEntryComponent,
    CategoryContainerComponent,
    MatCardModule,
    CdkDropList,
    CdkDropListGroup,
    CdkDrag
  ],
  templateUrl: './playlist-sorting-page.component.html',
  styleUrl: './playlist-sorting-page.component.css'
})
export class PlaylistSortingPageComponent implements OnInit {
  source: Track[] = [];
  targets: { name: string, tracks: Track[] }[] = [];

  constructor(private userService: UserService, private playlistService: PlaylistService, private modalService: NgbModal) {
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

  deleteCategory($event: Track[], index: number) {
    const modalRef = this.modalService.open(CategoryDeleteModal)

    modalRef.result.then(() => {
        $event.forEach((track, i) =>
          transferArrayItem(this.targets[index].tracks, this.source, i, i)
        );
        this.targets.splice(index, 1);
      }
    );
  }

  saveCategory($event: Track[], name: string) {
    const modalRef = this.modalService.open(CategorySaveModal)

    modalRef.result.then(() =>
      this.userService.currentUser.subscribe(user =>
        this.playlistService.savePlaylist(
          name,
          user!.id,
          $event.map(track => track.uri)
        )
      ).unsubscribe()
    );
  }
}
