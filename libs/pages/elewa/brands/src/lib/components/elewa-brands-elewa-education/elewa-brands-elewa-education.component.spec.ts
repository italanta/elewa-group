import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaBrandsElewaEducationComponent } from './elewa-brands-elewa-education.component';

describe('ElewaBrandsElewaEducationComponent', () => {
  let component: ElewaBrandsElewaEducationComponent;
  let fixture: ComponentFixture<ElewaBrandsElewaEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaBrandsElewaEducationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaBrandsElewaEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
