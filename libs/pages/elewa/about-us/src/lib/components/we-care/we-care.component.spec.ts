import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeCareComponent } from './we-care.component';

describe('WeCareComponent', () => {
  let component: WeCareComponent;
  let fixture: ComponentFixture<WeCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeCareComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
