import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaGroupVerticalListAllComponent } from './elewa-group-vertical-list-all.component';

describe('ElewaGroupVerticalListAllComponent', () => {
  let component: ElewaGroupVerticalListAllComponent;
  let fixture: ComponentFixture<ElewaGroupVerticalListAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaGroupVerticalListAllComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaGroupVerticalListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
