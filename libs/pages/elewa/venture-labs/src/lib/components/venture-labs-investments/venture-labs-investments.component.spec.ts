import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentureLabsInvestmentsComponent } from './venture-labs-investments.component';

describe('VentureLabsInvestmentsComponent', () => {
  let component: VentureLabsInvestmentsComponent;
  let fixture: ComponentFixture<VentureLabsInvestmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VentureLabsInvestmentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VentureLabsInvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
