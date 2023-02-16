import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaMissionComponent } from './cta-mission.component';

describe('CtaMissionComponent', () => {
  let component: CtaMissionComponent;
  let fixture: ComponentFixture<CtaMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CtaMissionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CtaMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
