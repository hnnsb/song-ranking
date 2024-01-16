import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistSortingPageComponent } from './playlist-sorting-page.component';

describe('PlaylistSortingPageComponent', () => {
  let component: PlaylistSortingPageComponent;
  let fixture: ComponentFixture<PlaylistSortingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistSortingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistSortingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
