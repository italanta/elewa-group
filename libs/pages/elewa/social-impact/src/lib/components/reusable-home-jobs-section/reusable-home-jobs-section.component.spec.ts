import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableHomeJobsSectionComponent } from './reusable-home-jobs-section.component';

describe('ReusableHomeJobsSectionComponent', () => {
  let component: ReusableHomeJobsSectionComponent;
  let fixture: ComponentFixture<ReusableHomeJobsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReusableHomeJobsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReusableHomeJobsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
