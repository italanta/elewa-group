import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentureLabsDiscoverComponent } from './venture-labs-discover.component';

describe('VentureLabsDiscoverComponent', () => {
  let component: VentureLabsDiscoverComponent;
  let fixture: ComponentFixture<VentureLabsDiscoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VentureLabsDiscoverComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VentureLabsDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
