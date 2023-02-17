import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestPageComponent } from './invest-page.component';

describe('InvestPageComponent', () => {
  let component: InvestPageComponent;
  let fixture: ComponentFixture<InvestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
