import {Component, inject, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'modal-save-playlist',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './category-save-modal.component.html',
  styleUrl: './category-save-modal.component.css'
})
export class CategorySaveModal {
  activeModal = inject(NgbActiveModal);

  @Input() categoryName = "";
  @Input() amount = 0;

}
