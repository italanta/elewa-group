import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaGroupCallToActionComponent } from './elewa-group-call-to-action.component';

describe('ElewaGroupCallToActionComponent', () => {
  let component: ElewaGroupCallToActionComponent;
  let fixture: ComponentFixture<ElewaGroupCallToActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaGroupCallToActionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaGroupCallToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
