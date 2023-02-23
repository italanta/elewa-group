import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeHubSectionComponent } from './creative-hub-section.component';

describe('CreativeHubSectionComponent', () => {
  let component: CreativeHubSectionComponent;
  let fixture: ComponentFixture<CreativeHubSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreativeHubSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreativeHubSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
