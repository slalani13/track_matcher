import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackDataCompetitiveComponent } from './track-data-competitive.component';

describe('TrackDataCompetitiveComponent', () => {
  let component: TrackDataCompetitiveComponent;
  let fixture: ComponentFixture<TrackDataCompetitiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackDataCompetitiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackDataCompetitiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
