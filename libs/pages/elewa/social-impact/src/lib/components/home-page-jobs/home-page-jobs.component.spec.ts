import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageJobsComponent } from './home-page-jobs.component';

describe('HomePageJobsComponent', () => {
  let component: HomePageJobsComponent;
  let fixture: ComponentFixture<HomePageJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageJobsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
