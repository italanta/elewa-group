import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaGroupArticleListComponent } from './elewa-group-article-list.component';

describe('ElewaGroupArticleListComponent', () => {
  let component: ElewaGroupArticleListComponent;
  let fixture: ComponentFixture<ElewaGroupArticleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaGroupArticleListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaGroupArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
