import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAndPatnerComponent } from './team-and-patner.component';

describe('TeamAndPatnerComponent', () => {
  let component: TeamAndPatnerComponent;
  let fixture: ComponentFixture<TeamAndPatnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamAndPatnerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamAndPatnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
