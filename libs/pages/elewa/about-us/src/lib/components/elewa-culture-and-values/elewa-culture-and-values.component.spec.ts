import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaCultureAndValuesComponent } from './elewa-culture-and-values.component';

describe('ElewaCultureAndValuesComponent', () => {
  let component: ElewaCultureAndValuesComponent;
  let fixture: ComponentFixture<ElewaCultureAndValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElewaCultureAndValuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElewaCultureAndValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
