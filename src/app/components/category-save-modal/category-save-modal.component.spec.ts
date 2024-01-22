import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySaveModal } from './category-save-modal.component';

describe('SavePlaylistModalComponent', () => {
  let component: CategorySaveModal;
  let fixture: ComponentFixture<CategorySaveModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorySaveModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorySaveModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
