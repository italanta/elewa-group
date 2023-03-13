import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsRelatedArticlesComponent } from './news-related-articles.component';

describe('NewsRelatedArticlesComponent', () => {
  let component: NewsRelatedArticlesComponent;
  let fixture: ComponentFixture<NewsRelatedArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsRelatedArticlesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsRelatedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
