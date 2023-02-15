import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaGroupTeamMemberComponent } from './elewa-group-team-member.component';

describe('ElewaGroupTeamMemberComponent', () => {
  let component: ElewaGroupTeamMemberComponent;
  let fixture: ComponentFixture<ElewaGroupTeamMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaGroupTeamMemberComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaGroupTeamMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
