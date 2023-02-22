import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactProjectsComponent } from './impact-projects.component';

describe('ImpactProjectsComponent', () => {
  let component: ImpactProjectsComponent;
  let fixture: ComponentFixture<ImpactProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImpactProjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImpactProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
