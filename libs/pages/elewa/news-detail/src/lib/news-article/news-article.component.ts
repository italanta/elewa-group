import { Component } from '@angular/core';
import { BLOCKS, Document } from '@contentful/rich-text-types';

@Component({
  selector: 'elewa-group-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss'],
})
export class NewsArticleComponent {
  blog: Document = {
    nodeType: BLOCKS.DOCUMENT,
    data: {},
    content: [
      {
        nodeType: BLOCKS.PARAGRAPH,
        data: {},
        content: [
          {
            nodeType: 'text',
            data: {},
            value: 'Hello World',
            marks: [{ type: 'normal' }],
          }
        ],
      },
    ],
  };
  
}
