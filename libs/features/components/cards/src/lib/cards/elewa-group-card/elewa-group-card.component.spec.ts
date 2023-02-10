import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaGroupCardComponent } from './elewa-group-card.component';

describe('ElewaGroupCardComponent', () => {
  let component: ElewaGroupCardComponent;
  let fixture: ComponentFixture<ElewaGroupCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaGroupCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaGroupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
