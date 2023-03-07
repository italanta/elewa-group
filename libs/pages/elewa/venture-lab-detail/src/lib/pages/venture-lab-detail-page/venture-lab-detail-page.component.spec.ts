import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentureLabDetailPageComponent } from './venture-lab-detail-page.component';

describe('VentureLabDetailPageComponent', () => {
  let component: VentureLabDetailPageComponent;
  let fixture: ComponentFixture<VentureLabDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VentureLabDetailPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VentureLabDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
