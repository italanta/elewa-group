import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialImpactComponent } from './social-impact.component';

describe('SocialImpactComponent', () => {
  let component: SocialImpactComponent;
  let fixture: ComponentFixture<SocialImpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialImpactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
