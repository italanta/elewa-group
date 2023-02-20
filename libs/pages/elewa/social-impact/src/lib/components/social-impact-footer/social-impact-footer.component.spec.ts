import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialImpactFooterComponent } from './social-impact-footer.component';

describe('SocialImpactFooterComponent', () => {
  let component: SocialImpactFooterComponent;
  let fixture: ComponentFixture<SocialImpactFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialImpactFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialImpactFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
