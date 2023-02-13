import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactSectionComponent } from './impact-section.component';

describe('ImpactSectionComponent', () => {
  let component: ImpactSectionComponent;
  let fixture: ComponentFixture<ImpactSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImpactSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImpactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
