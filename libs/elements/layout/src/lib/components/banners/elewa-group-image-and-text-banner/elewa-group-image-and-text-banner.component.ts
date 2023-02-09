import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-group-image-and-text-banner',
  templateUrl: './elewa-group-image-and-text-banner.component.html',
  styleUrls: ['./elewa-group-image-and-text-banner.component.scss'],
})
export class ElewaGroupImageAndTextBannerComponent {
  @Input() imgUrl =
    'https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60';
  @Input() text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nostrum dolores rem eligendi repellendus quo earum natus ullam, porro error  blanditiis ea deserunt nesciunt eius perspiciatis maiores id, quam cumnecessitatibus doloremque. Odit eius porro, laborum aliquid consequuntur  autem commodi.';
  @Input() title = 'A cooperative mindset';
  @Input() placement = 'left';
  @Input() background = 'white';
}
