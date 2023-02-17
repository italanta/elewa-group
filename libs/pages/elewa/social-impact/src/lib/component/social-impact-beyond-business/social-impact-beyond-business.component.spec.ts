import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialImpactBeyondBusinessComponent } from './social-impact-beyond-business.component';

describe('SocialImpactBeyondBusinessComponent', () => {
  let component: SocialImpactBeyondBusinessComponent;
  let fixture: ComponentFixture<SocialImpactBeyondBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialImpactBeyondBusinessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialImpactBeyondBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
