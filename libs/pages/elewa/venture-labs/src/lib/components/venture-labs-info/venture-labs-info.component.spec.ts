import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentureLabsInfoComponent } from './venture-labs-info.component';

describe('VentureLabsInfoComponent', () => {
  let component: VentureLabsInfoComponent;
  let fixture: ComponentFixture<VentureLabsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VentureLabsInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VentureLabsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
