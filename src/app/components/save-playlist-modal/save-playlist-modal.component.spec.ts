import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePlaylistModalComponent } from './save-playlist-modal.component';

describe('SavePlaylistModalComponent', () => {
  let component: SavePlaylistModalComponent;
  let fixture: ComponentFixture<SavePlaylistModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavePlaylistModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavePlaylistModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
