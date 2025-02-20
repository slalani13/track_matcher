import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOverCompetitiveComponent } from './game-over-competitive.component';

describe('GameOverCompetitiveComponent', () => {
  let component: GameOverCompetitiveComponent;
  let fixture: ComponentFixture<GameOverCompetitiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameOverCompetitiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameOverCompetitiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
