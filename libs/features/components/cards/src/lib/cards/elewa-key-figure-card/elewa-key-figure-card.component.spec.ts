import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaKeyFigureCardComponent } from './elewa-key-figure-card.component';

describe('ElewaKeyFigureCardComponent', () => {
  let component: ElewaKeyFigureCardComponent;
  let fixture: ComponentFixture<ElewaKeyFigureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaKeyFigureCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaKeyFigureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
