import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDeleteModal } from './category-delete-modal.component';

describe('SavePlaylistModalComponent', () => {
  let component: CategoryDeleteModal;
  let fixture: ComponentFixture<CategoryDeleteModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryDeleteModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryDeleteModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
