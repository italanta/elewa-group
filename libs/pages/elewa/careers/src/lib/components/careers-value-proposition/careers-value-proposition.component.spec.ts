import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersValuePropositionComponent } from './careers-value-proposition.component';

describe('CareersValuePropositionComponent', () => {
  let component: CareersValuePropositionComponent;
  let fixture: ComponentFixture<CareersValuePropositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CareersValuePropositionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CareersValuePropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
