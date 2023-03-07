import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentureLabsPageComponent } from './venture-labs-page.component';

describe('VentureLabsPageComponent', () => {
  let component: VentureLabsPageComponent;
  let fixture: ComponentFixture<VentureLabsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VentureLabsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VentureLabsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
