import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeJobSectionComponent } from './home-job-section.component';

describe('HomeJobSectionComponent', () => {
  let component: HomeJobSectionComponent;
  let fixture: ComponentFixture<HomeJobSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeJobSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeJobSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
