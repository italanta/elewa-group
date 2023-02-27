import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsOpportunitiesComponent } from './brands-opportunities.component';

describe('BrandsOpportunitiesComponent', () => {
  let component: BrandsOpportunitiesComponent;
  let fixture: ComponentFixture<BrandsOpportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrandsOpportunitiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrandsOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
