import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlaylistSaveModalComponent} from './playlist-save-modal.component';

describe('SavePlaylistModalComponent', () => {
  let component: PlaylistSaveModalComponent;
  let fixture: ComponentFixture<PlaylistSaveModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistSaveModalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PlaylistSaveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
