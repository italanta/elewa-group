/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ElewaGroupButtonWithAnimationComponent } from './elewa-group-button-with-animation.component';

describe('ElewaGroupButtonWithAnimationComponent', () => {
  let component: ElewaGroupButtonWithAnimationComponent;
  let fixture: ComponentFixture<ElewaGroupButtonWithAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElewaGroupButtonWithAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElewaGroupButtonWithAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
