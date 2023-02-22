import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativeSectionComponent } from './cooperative-section.component';

describe('CooperativeSectionComponent', () => {
  let component: CooperativeSectionComponent;
  let fixture: ComponentFixture<CooperativeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CooperativeSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CooperativeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
