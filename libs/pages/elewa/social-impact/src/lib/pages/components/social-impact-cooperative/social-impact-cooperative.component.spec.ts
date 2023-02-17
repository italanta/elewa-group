import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialImpactCooperativeComponent } from './social-impact-cooperative.component';

describe('SocialImpactCooperativeComponent', () => {
  let component: SocialImpactCooperativeComponent;
  let fixture: ComponentFixture<SocialImpactCooperativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialImpactCooperativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialImpactCooperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
