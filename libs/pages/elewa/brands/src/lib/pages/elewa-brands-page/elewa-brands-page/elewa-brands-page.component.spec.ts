import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaBrandsPageComponent } from './elewa-brands-page.component';

describe('ElewaBrandsPageComponent', () => {
  let component: ElewaBrandsPageComponent;
  let fixture: ComponentFixture<ElewaBrandsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaBrandsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaBrandsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

