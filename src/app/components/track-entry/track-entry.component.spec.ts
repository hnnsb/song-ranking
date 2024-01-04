import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackEntryComponent } from './track-entry.component';

describe('TrackEntryComponent', () => {
  let component: TrackEntryComponent;
  let fixture: ComponentFixture<TrackEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
