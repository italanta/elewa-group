import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaVerticalIconAndTextComponent } from './elewa-vertical-icon-and-text.component';

describe('ElewaVerticalIconAndTextComponent', () => {
  let component: ElewaVerticalIconAndTextComponent;
  let fixture: ComponentFixture<ElewaVerticalIconAndTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaVerticalIconAndTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaVerticalIconAndTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
