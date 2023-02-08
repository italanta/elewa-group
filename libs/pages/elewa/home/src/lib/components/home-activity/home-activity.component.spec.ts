import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeActivityComponent } from './home-activity.component';

describe('HomeActivityComponent', () => {
  let component: HomeActivityComponent;
  let fixture: ComponentFixture<HomeActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeActivityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
