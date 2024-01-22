import {Component, inject, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'modal-delete-playlist',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './category-delete-modal.component.html',
  styleUrl: './category-delete-modal.component.css'
})
export class CategoryDeleteModal {
  activeModal = inject(NgbActiveModal);

  @Input() categoryName = "";
  @Input() amount = 0;
  
}
