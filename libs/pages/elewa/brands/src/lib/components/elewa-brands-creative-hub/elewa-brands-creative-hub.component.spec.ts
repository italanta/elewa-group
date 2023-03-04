import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaBrandsCreativeHubComponent } from './elewa-brands-creative-hub.component';

describe('ElewaBrandsCreativeHubComponent', () => {
  let component: ElewaBrandsCreativeHubComponent;
  let fixture: ComponentFixture<ElewaBrandsCreativeHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaBrandsCreativeHubComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaBrandsCreativeHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
