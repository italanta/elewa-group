import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaHomePageLanderComponent } from './elewa-home-page-lander.component';

describe('ElewaHomePageLanderComponent', () => {
  let component: ElewaHomePageLanderComponent;
  let fixture: ComponentFixture<ElewaHomePageLanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaHomePageLanderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaHomePageLanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
