import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlaylistsPage} from './playlists-page.component';

describe('UserComponent', () => {
  let component: PlaylistsPage;
  let fixture: ComponentFixture<PlaylistsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistsPage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PlaylistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
