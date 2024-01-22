import {Component, inject} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-save-playlist-modal',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './playlist-save-modal.component.html',
  styleUrl: './playlist-save-modal.component.css'
})
export class PlaylistSaveModalComponent {
  activeModal = inject(NgbActiveModal);

  onSubmit(f: NgForm) {
    this.activeModal.close(f.value)
  }
}
