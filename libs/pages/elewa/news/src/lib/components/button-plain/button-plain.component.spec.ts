import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPlainComponent } from './button-plain.component';

describe('ButtonPlainComponent', () => {
  let component: ButtonPlainComponent;
  let fixture: ComponentFixture<ButtonPlainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonPlainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonPlainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
