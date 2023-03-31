import { Component } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Article } from 'libs/features/components/ui-lists/src/lib/article-interface';

@Component({
  selector: 'elewa-group-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss'],
})
export class NewsSectionComponent {
  #articles:Article[];
  selectedArticles:Article[]
  categories:string[] = ['all-news','elewa','italanta','venture-labs','press']
  constructor(){
    this.#articles = [
      {
        image: "https://images.unsplash.com/photo-1579165466949-3180a3d056d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        timestamp: "27 Nov 2022",
        title: "Angular Lifecycle methods",
        topic:'elewa',
        body: "somethsijdnndjkfvjdfv jfjdfj dfjfdjdfnjd"
      },
      {
        image: "https://images.unsplash.com/photo-1555019877-f3eb6deb89d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        timestamp: "22 Nov 2022",
        title: "The case against Non-null Assertion Operator",
        topic:"iTalanta",
        body: "somethsijdnndjkfvjdfv jfjdfj dfjfdjdfnjd"
      },
      {
        image: "https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        timestamp: "20 Nov 2022",
        title: "Italanta Academy Launched in Kakuma",
        topic: "press",
        body: "somethsijdnndjkfvjdfv jfjdfj dfjfdjdfnjd"
      },
      {
        image: "https://images.unsplash.com/photo-1456324463128-7ff6903988d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        timestamp: "20 Nov 2022",
        title: "Introducing conversational Learning",
        topic: "elewa",
        body: "somethsijdnndjkfvjdfv jfjdfj dfjfdjdfnjd"
      },
      {
        image: "https://images.unsplash.com/reserve/wi9yf7kTQxCNeY72cCY6_Images%20of%20Jenny%20Lace%20Plasticity%20Publish%20%284%20of%2025%29.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        timestamp: "23 Sept 2022",
        title: "The case against Non-null Assertion Operator",
        topic: "venture-labs",
        body: "somethsijdnndjkfvjdfv jfjdfj dfjfdjdfnjd"
      }

    ];
    this.selectedArticles = this.selectedArticles || this.#articles
  }
  filterSelector(message:string):void{
    this.selectedArticles = this.filterArticles(message)    
  }

  filterArticles(query:string):Article[]{
    if(query !== "all-news"){
      return this.#articles.filter(article => article.topic.toLowerCase().includes(query.toLowerCase()))
    }
    return this.#articles
  }

  clickHandler(cat:string):void{
    this.filterArticles(cat)
  }

}

