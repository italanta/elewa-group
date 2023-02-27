import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaGroupBrandsComponent } from './elewa-group-brands.component';

describe('ElewaGroupBrandsComponent', () => {
  let component: ElewaGroupBrandsComponent;
  let fixture: ComponentFixture<ElewaGroupBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaGroupBrandsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaGroupBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
