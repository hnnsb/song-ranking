import {Component, inject} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-save-playlist-modal',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './save-playlist-modal.component.html',
  styleUrl: './save-playlist-modal.component.css'
})
export class SavePlaylistModalComponent {
  activeModal = inject(NgbActiveModal);

  onSubmit(f: NgForm) {
    this.activeModal.close(f.value)
  }
}