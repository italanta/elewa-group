import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaGroupVerticalListOneComponent } from './elewa-group-vertical-list-one.component';

describe('ElewaGroupVerticalListOneComponent', () => {
  let component: ElewaGroupVerticalListOneComponent;
  let fixture: ComponentFixture<ElewaGroupVerticalListOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaGroupVerticalListOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaGroupVerticalListOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
