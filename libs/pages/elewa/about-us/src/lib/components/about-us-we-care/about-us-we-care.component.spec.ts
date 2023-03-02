import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsWeCareComponent } from './about-us-we-care.component';

describe('AboutUsWeCareComponent', () => {
  let component: AboutUsWeCareComponent;
  let fixture: ComponentFixture<AboutUsWeCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutUsWeCareComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutUsWeCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
