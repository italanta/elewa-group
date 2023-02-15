import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaGroupHorizontalListOrgsComponent } from './elewa-group-horizontal-list-orgs.component';

describe('ElewaGroupHorizontalListOrgsComponent', () => {
  let component: ElewaGroupHorizontalListOrgsComponent;
  let fixture: ComponentFixture<ElewaGroupHorizontalListOrgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaGroupHorizontalListOrgsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaGroupHorizontalListOrgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
