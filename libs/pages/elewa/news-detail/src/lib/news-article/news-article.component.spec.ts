import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticleComponent } from './news-article.component';

describe('NewsArticleComponent', () => {
  let component: NewsArticleComponent;
  let fixture: ComponentFixture<NewsArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsArticleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
