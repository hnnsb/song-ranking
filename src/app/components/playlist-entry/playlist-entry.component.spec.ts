import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistEntryComponent } from './playlist-entry.component';

describe('PlaylistEntryComponent', () => {
  let component: PlaylistEntryComponent;
  let fixture: ComponentFixture<PlaylistEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaylistEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
