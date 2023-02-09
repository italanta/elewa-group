import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageActivityComponent } from './home-page-activity.component';

describe('HomePageActivityComponent', () => {
  let component: HomePageActivityComponent;
  let fixture: ComponentFixture<HomePageActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageActivityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
