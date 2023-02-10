import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-social-impact',
  templateUrl: './social-impact.component.html',
  styleUrls: ['./social-impact.component.scss'],
})
export class SocialImpactComponent {
  @Input() title:string | undefined
  @Input() paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec nequearcu. Sed venenatis enim at maximus euismod. Ut mi orci, vulputate eu commodo hendrerit nisi. Nam sapien metus, tristique sit amet
  consectetur eget, pretium nec sem. Etiam egestas feugiat lacus, ac feugiat
  sapien faucibus nec. Vivamus arcu sapien, luctus id augue eget, vestibulum
  molesed rutrum pretium facilisis. Vivamus ullamcorper purus mollis auctor
  viverra. Aenean cursus bibendum felis non vulputate. Proin sed massa 
  sapien tincidunt pulvinar. Nunc mauris est, dapibus non tellus id,
  vehicula fermentum urna. Nullam iaculis purus massa`
  @Input() imgSrc = "https://cdn.pixabay.com/photo/2023/01/30/06/43/village-7754827_640.jpg"

}
