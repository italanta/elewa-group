import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaBrandsVentureLabsComponent } from './elewa-brands-venture-labs.component';

describe('ElewaBrandsVentureLabsComponent', () => {
  let component: ElewaBrandsVentureLabsComponent;
  let fixture: ComponentFixture<ElewaBrandsVentureLabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaBrandsVentureLabsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaBrandsVentureLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
