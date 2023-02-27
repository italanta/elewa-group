import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsCreativeHubComponent } from './brands-creative-hub.component';

describe('BrandsCreativeHubComponent', () => {
  let component: BrandsCreativeHubComponent;
  let fixture: ComponentFixture<BrandsCreativeHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrandsCreativeHubComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrandsCreativeHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
