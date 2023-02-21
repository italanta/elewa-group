import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialImpactPageComponent } from './social-impact-page.component';

describe('SocialImpactPageComponent', () => {
  let component: SocialImpactPageComponent;
  let fixture: ComponentFixture<SocialImpactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialImpactPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialImpactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
