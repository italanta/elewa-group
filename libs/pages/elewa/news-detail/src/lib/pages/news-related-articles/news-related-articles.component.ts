import { Input, Component } from '@angular/core';

@Component({
  selector: 'elewa-group-news-related-articles',
  templateUrl: './news-related-articles.component.html',
  styleUrls: ['./news-related-articles.component.scss'],
})
export class NewsRelatedArticlesComponent {
@Input() articles= [
  {
    image: "https://cdn.pixabay.com/photo/2023/03/02/03/01/bird-7824442__340.jpg",
    title:"Introducing Conventional learning lorem ipsum dolar",
    timestamp:"20 Oct 2022 ▪ 5 min read"
    },
    {
        image: "https://cdn.pixabay.com/photo/2023/03/02/03/01/bird-7824442__340.jpg",
    title:"Introducing Conventional learning lorem ipsum dolar",
    timestamp:"20 Oct 2022 ▪ 5 min read"
    },
    {
        image: "https://cdn.pixabay.com/photo/2023/03/02/03/01/bird-7824442__340.jpg",
        title:"Introducing Conventional learning lorem ipsum dolar",
        timestamp:"20 Oct 2022 ▪ 5 min read"
    }
]

}
