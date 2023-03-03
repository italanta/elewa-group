import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBannerComponent } from './contact-banner.component';

describe('ContactBannerComponent', () => {
  let component: ContactBannerComponent;
  let fixture: ComponentFixture<ContactBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
