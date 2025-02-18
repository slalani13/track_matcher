import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackMetadataComponent } from './track-metadata.component';

describe('TrackMetadataComponent', () => {
  let component: TrackMetadataComponent;
  let fixture: ComponentFixture<TrackMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackMetadataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
