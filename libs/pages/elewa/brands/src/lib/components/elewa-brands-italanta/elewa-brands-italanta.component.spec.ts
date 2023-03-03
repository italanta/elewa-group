import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaBrandsItalantaComponent } from './elewa-brands-italanta.component';

describe('ElewaBrandsItalantaComponent', () => {
  let component: ElewaBrandsItalantaComponent;
  let fixture: ComponentFixture<ElewaBrandsItalantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaBrandsItalantaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaBrandsItalantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
