import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageLanderComponent } from './home-page-lander.component';

describe('HomePageLanderComponent', () => {
  let component: HomePageLanderComponent;
  let fixture: ComponentFixture<HomePageLanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageLanderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageLanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
