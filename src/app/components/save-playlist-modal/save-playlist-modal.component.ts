import {Component, inject} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-save-playlist-modal',
  standalone: true,
  imports: [],
  templateUrl: './save-playlist-modal.component.html',
  styleUrl: './save-playlist-modal.component.css'
})
export class SavePlaylistModalComponent {
  activeModal = inject(NgbActiveModal);
}
