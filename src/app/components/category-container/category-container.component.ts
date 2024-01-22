import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Track} from "../../models/Spotify/track";
import {NgClass} from "@angular/common";
import {TrackEntryComponent} from "../track-entry/track-entry.component";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {CdkDrag, CdkDragDrop, CdkDropList} from "@angular/cdk/drag-drop";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-category-container',
  standalone: true,
  imports: [
    TrackEntryComponent,
    FormsModule,
    NgClass,
    MatCardModule,
    MatDividerModule,
    CdkDrag,
    CdkDropList,
    MatButtonModule
  ],
  templateUrl: './category-container.component.html',
  styleUrl: './category-container.component.css'
})
export class CategoryContainerComponent {
  @Input() tracks: Track[] = [];
  @Input() categoryName: string = "New Category";
  @Input() index = 0;

  @Output() categoryNameChange = new EventEmitter<string>;
  @Output() propagateDropped = new EventEmitter<CdkDragDrop<Track[]>>;
  @Output() delete = new EventEmitter<Track[]>;
  @Output() save = new EventEmitter<Track[]>;

  isEditing = false;
  isCollapsed = true;

  toggleEdit() {
    this.isEditing = !this.isEditing;
    this.categoryNameChange.emit(this.categoryName);
  }

  edit(b: boolean) {
    this.isEditing = b;
    this.categoryNameChange.emit(this.categoryName);
  }

  drop(event: CdkDragDrop<Track[]>) {
    this.propagateDropped.emit(event);
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  saveToPlaylist() {
    this.save.emit(this.tracks)
  }

  deleteCategory() {
    this.delete.emit(this.tracks);
  }
}
