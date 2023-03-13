import { Component } from '@angular/core';
import { Article } from 'libs/features/components/ui-lists/src/lib/elewa-group-article-list/elewa-group-article-list.component';

@Component({
  selector: 'elewa-group-elewa-news-section',
  templateUrl: './elewa-news-section.component.html',
  styleUrls: ['./elewa-news-section.component.scss'],
})
export class ElewaNewsSectionComponent { 
  article: Article[] = [
    {
      image: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png",
      timestamp: "27 Nov 2022",
      body: "7",
      title: "Angular elewa Lifecycle methods 1",
      topic: "elewa"
    },
    {
      image: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png",
      timestamp: "27 Nov 2022",
      body: "7",
      title: "Angular elewa Lifecycle methods 2",
      topic: "elewa"
    },
    {
      image: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png",
      timestamp: "27 Nov 2022",
      body: "7",
      title: "Elewa Lifecycle methods 3",
      topic: "elewa"
    },
    {
      image: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png",
      timestamp: "27 Nov 2022",
      body: "this for press",
      title: "press Lifecycle methods 1",
      topic: "press"
    },
    {
      image: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png",
      timestamp: "27 Nov 2022",
      body: "this for press",
      title: "press Lifecycle methods 2",
      topic: "press"
    },
    {
      image: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png",
      timestamp: "27 Nov 2022",
      body: "this for press",
      title: "press Lifecycle methods 3",
      topic: "press"
    },
    {
      image: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png",
      timestamp: "27 Nov 2022",
      body: "this for iTalanta",
      title: "iTalanta Lifecycle methods 1",
      topic: "iTalanta"
    },
    {
      image: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png",
      timestamp: "27 Nov 2022",
      body: "this for iTalanta",
      title: "iTalanta Lifecycle methods 2",
      topic: "iTalanta"
    },
    {
      image: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png",
      timestamp: "27 Nov 2022",
      body: "this for iTalanta",
      title: "iTalanta Lifecycle methods 3",
      topic: "iTalanta"
    },
    {
      image: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png",
      timestamp: "27 Nov 2022",
      body: "this for iTalanta",
      title: "Venture-labs Lifecycle methods 1",
      topic: "venture-labs"
    },
    {
      image: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png",
      timestamp: "27 Nov 2022",
      body: "this for iTalanta",
      title: "Venture-labs Lifecycle methods 2",
      topic: "venture-labs"
    },
    {
      image: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png",
      timestamp: "27 Nov 2022",
      body: "this for iTalanta",
      title: "Venture-labs Lifecycle methods 3",
      topic: "venture-labs"
    },
  ]
}
