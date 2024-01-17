import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Track} from "../../models/Spotify/track";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {TrackEntryComponent} from "../track-entry/track-entry.component";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";

@Component({
  selector: 'app-category-container',
  standalone: true,
  imports: [
    NgForOf,
    TrackEntryComponent,
    NgIf,
    FormsModule,
    NgClass,
    MatCardModule,
    MatDividerModule
  ],
  templateUrl: './category-container.component.html',
  styleUrl: './category-container.component.css'
})
export class CategoryContainerComponent {
  @Input() tracks: Track[] = [];
  @Input() categoryName: string = "New Category";
  @Output() categoryNameChange = new EventEmitter<string>;

  isEditing = false;

  toggleEdit() {
    this.isEditing = !this.isEditing;
    this.categoryNameChange.emit(this.categoryName);
  }

  edit(b: boolean) {
    this.isEditing = b;
    this.categoryNameChange.emit(this.categoryName);
  }
}
