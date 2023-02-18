import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanersComponent } from './baners.component';

describe('BanersComponent', () => {
  let component: BanersComponent;
  let fixture: ComponentFixture<BanersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BanersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BanersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
