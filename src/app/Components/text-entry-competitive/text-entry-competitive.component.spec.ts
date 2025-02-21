import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEntryCompetitiveComponent } from './text-entry-competitive.component';

describe('TextEntryCompetitiveComponent', () => {
  let component: TextEntryCompetitiveComponent;
  let fixture: ComponentFixture<TextEntryCompetitiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextEntryCompetitiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextEntryCompetitiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
