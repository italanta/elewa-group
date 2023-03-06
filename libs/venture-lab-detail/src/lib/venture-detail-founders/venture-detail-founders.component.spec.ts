import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentureDetailFoundersComponent } from './venture-detail-founders.component';

describe('VentureDetailFoundersComponent', () => {
  let component: VentureDetailFoundersComponent;
  let fixture: ComponentFixture<VentureDetailFoundersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VentureDetailFoundersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VentureDetailFoundersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
