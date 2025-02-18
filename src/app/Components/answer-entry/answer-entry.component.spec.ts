import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerEntryComponent } from './answer-entry.component';

describe('AnswerEntryComponent', () => {
  let component: AnswerEntryComponent;
  let fixture: ComponentFixture<AnswerEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
