import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCallToActionComponent } from './social-call-to-action.component';

describe('SocialCallToActionComponent', () => {
  let component: SocialCallToActionComponent;
  let fixture: ComponentFixture<SocialCallToActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialCallToActionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialCallToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
