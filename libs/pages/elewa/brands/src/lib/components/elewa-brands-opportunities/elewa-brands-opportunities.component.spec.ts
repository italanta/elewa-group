import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaBrandsOpportunitiesComponent } from './elewa-brands-opportunities.component';

describe('ElewaBrandsOpportunitiesComponent', () => {
  let component: ElewaBrandsOpportunitiesComponent;
  let fixture: ComponentFixture<ElewaBrandsOpportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaBrandsOpportunitiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaBrandsOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
