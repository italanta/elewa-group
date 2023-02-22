import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialImpactOpenKnowledgeComponent } from './social-impact-open-knowledge.component';

describe('SocialImpactOpenKnowledgeComponent', () => {
  let component: SocialImpactOpenKnowledgeComponent;
  let fixture: ComponentFixture<SocialImpactOpenKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialImpactOpenKnowledgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialImpactOpenKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
