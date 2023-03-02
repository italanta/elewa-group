import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaBrandsBannerComponent } from './elewa-brands-banner.component';

describe('ElewaBrandsBannerComponent', () => {
  let component: ElewaBrandsBannerComponent;
  let fixture: ComponentFixture<ElewaBrandsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaBrandsBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaBrandsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
