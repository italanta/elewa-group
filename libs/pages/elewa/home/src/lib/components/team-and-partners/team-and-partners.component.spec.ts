import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAndPartnersComponent } from './team-and-partners.component';

describe('TeamAndPartnersComponent', () => {
  let component: TeamAndPartnersComponent;
  let fixture: ComponentFixture<TeamAndPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamAndPartnersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamAndPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
