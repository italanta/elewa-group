import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestingInElewaComponent } from './investing-in-elewa.component';

describe('InvestingInElewaComponent', () => {
  let component: InvestingInElewaComponent;
  let fixture: ComponentFixture<InvestingInElewaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestingInElewaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestingInElewaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
