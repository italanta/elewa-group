import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaGroupButtonComponent } from './elewa-group-button.component';

describe('ElewaGroupButtonComponent', () => {
  let component: ElewaGroupButtonComponent;
  let fixture: ComponentFixture<ElewaGroupButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaGroupButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaGroupButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
