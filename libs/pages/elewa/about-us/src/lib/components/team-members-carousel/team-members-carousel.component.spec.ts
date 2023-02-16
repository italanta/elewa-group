import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMembersCarouselComponent } from './team-members-carousel.component';

describe('TeamMembersCarouselComponent', () => {
  let component: TeamMembersCarouselComponent;
  let fixture: ComponentFixture<TeamMembersCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamMembersCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamMembersCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
