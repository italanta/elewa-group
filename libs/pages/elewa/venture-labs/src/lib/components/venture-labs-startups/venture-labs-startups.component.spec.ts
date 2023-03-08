import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentureLabsStartupsComponent } from './venture-labs-startups.component';

describe('VentureLabsStartupsComponent', () => {
  let component: VentureLabsStartupsComponent;
  let fixture: ComponentFixture<VentureLabsStartupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VentureLabsStartupsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VentureLabsStartupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
