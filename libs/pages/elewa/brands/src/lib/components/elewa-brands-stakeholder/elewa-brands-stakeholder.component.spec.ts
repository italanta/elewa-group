import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaBrandsStakeholderComponent } from './elewa-brands-stakeholder.component';

describe('ElewaBrandsStakeholderComponent', () => {
  let component: ElewaBrandsStakeholderComponent;
  let fixture: ComponentFixture<ElewaBrandsStakeholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaBrandsStakeholderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaBrandsStakeholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
