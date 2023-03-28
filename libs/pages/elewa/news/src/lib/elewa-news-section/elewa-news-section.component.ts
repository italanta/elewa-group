import { Component, Input } from '@angular/core';
import { Article } from 'libs/features/components/ui-lists/src/lib/elewa-group-article-list/elewa-group-article-list.component';
@Component({
  selector: 'elewa-group-elewa-news-section',
  templateUrl: './elewa-news-section.component.html',
  styleUrls: ['./elewa-news-section.component.scss'],
})
export class ElewaNewsSectionComponent {
title = "News & Stories"
 article : Article[] = 
[{
  image: "https://media.gettyimages.com/id/sb10069524c-001/photo/south-africa-cape-town-hout-bay-group-portrait-of-boys-jumping-in-field.jpg?s=612x612&w=gi&k=20&c=WKGJNH5q42Io6WApbEU-2TqSQTdR2wI5bXwGWAfC8Hg=",
  timestamp: "12 oct 2022 ",
  title: "introduction to controversial learning",
  topic: "elewa",
  body: "dummy"
},
{
  image: "https://www.iofs.org.kz/uploads/2022/05/7779.jpg",
  timestamp: "08 dec 2022",
  title: "rewatch the italanta academy launch event",
  topic: "italanta",
  body: "dummy",

},

{
  image: "https://media.gettyimages.com/id/950514452/photo/engineer.jpg?s=612x612&w=0&k=20&c=G8Blb3mzohi4De9dsmW1iOlRYY8vmIhx8zrVbRWV3BM=",
  timestamp: "06 0ct 2022",
  title: "introducung conversational",
  topic: "venture-labs",
  body: "dummy"},

  {
    image: "https://media.gettyimages.com/id/950514452/photo/engineer.jpg?s=612x612&w=0&k=20&c=G8Blb3mzohi4De9dsmW1iOlRYY8vmIhx8zrVbRWV3BM=",
    timestamp: "06 0ct 2022",
    title: "introducung conversational",
    topic: "press",
    body: "dummy"},

    {
      image: "https://media.gettyimages.com/id/950514452/photo/engineer.jpg?s=612x612&w=0&k=20&c=G8Blb3mzohi4De9dsmW1iOlRYY8vmIhx8zrVbRWV3BM=",
      timestamp: "06 0ct 2022",
      title: "introducung conversational",
      topic: "all-news",
      body: "dummy"},
      {
        image: "https://media.gettyimages.com/id/sb10069524c-001/photo/south-africa-cape-town-hout-bay-group-portrait-of-boys-jumping-in-field.jpg?s=612x612&w=gi&k=20&c=WKGJNH5q42Io6WApbEU-2TqSQTdR2wI5bXwGWAfC8Hg=",
        timestamp: "12 oct 2022 ",
        title: "introduction to controversial learning",
        topic: "all-news",
        body: "dummy"
      },
      {
        image: "https://media.gettyimages.com/id/sb10069524c-001/photo/south-africa-cape-town-hout-bay-group-portrait-of-boys-jumping-in-field.jpg?s=612x612&w=gi&k=20&c=WKGJNH5q42Io6WApbEU-2TqSQTdR2wI5bXwGWAfC8Hg=",
        timestamp: "12 oct 2022 ",
        title: "introduction to controversial learning",
        topic: "all-news",
        body: "dummy"
      },
]
}
