/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ElewaAboutUsLocationSectionComponent } from './elewa-about-us-location-section.component';

describe('ElewaAboutUsLocationSectionComponent', () => {
  let component: ElewaAboutUsLocationSectionComponent;
  let fixture: ComponentFixture<ElewaAboutUsLocationSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElewaAboutUsLocationSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElewaAboutUsLocationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
