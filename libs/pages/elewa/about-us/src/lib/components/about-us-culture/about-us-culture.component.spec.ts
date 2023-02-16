import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsCultureComponent } from './about-us-culture.component';

describe('AboutUsCultureComponent', () => {
  let component: AboutUsCultureComponent;
  let fixture: ComponentFixture<AboutUsCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutUsCultureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutUsCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
