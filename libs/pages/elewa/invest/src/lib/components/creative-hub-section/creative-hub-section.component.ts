import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-creative-hub-section',
  templateUrl: './creative-hub-section.component.html',
  styleUrls: ['./creative-hub-section.component.scss'],
})
export class CreativeHubSectionComponent {
  imgURL = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690302/elewa-group-website/Images/Mask_Group_20_yshsq2.png'
  position = 'right'
  bgColor = 'white'
  titleText = 'Elewa Creative Hub'
  graphText : string[] = ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quisquam consequuntur nisi, pariatur dignissimos itaque aliquid ullam reprehenderit vel quas est quae atque assumenda dolor, ab expedita sequi mollitia sed?','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quisquam consequuntur nisi, pariatur dignissimos itaque aliquid ullam reprehenderit vel quas est quae atque assumenda dolor, ab expedita sequi mollitia sed?']
}
