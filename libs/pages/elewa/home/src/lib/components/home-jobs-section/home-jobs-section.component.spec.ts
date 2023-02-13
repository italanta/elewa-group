import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeJobsSectionComponent } from './home-jobs-section.component';

describe('HomeJobsSectionComponent', () => {
  let component: HomeJobsSectionComponent;
  let fixture: ComponentFixture<HomeJobsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeJobsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeJobsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
