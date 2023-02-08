import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-group-image-and-text-banner',
  templateUrl: './elewa-group-image-and-text-banner.component.html',
  styleUrls: ['./elewa-group-image-and-text-banner.component.scss'],
})
export class ElewaGroupImageAndTextBannerComponent {
  @Input() title = 'Contràriament a la creença popular';
  @Input() paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec nequearcu. Sed venenatis enim at maximus euismod. Ut mi orci, vulputate eu commodo hendrerit nisi. Nam sapien metus, tristique sit amet
  consectetur eget, pretium nec sem. Etiam egestas feugiat lacus, ac feugiat
  sapien faucibus nec. Vivamus arcu sapien, luctus id augue eget, vestibulum
  molesed rutrum pretium facilisis. Vivamus ullamcorper purus mollis auctor
  viverra. Aenean cursus bibendum felis non vulputate. Proin sed massa vitae
  sapien tincidunt pulvinar. Nunc mauris est, dapibus non tellus id,
  vehicula fermentum urna. Nullam iaculis purus massa`
  @Input() imgSrc = "https://media.istockphoto.com/id/1365693929/photo/shot-of-a-young-woman-using-a-digital-tablet-while-inspecting-crops-on-a-farm.jpg?b=1&s=170667a&w=0&k=20&c=u2E4bzYwNmGJspLn_UHrvCw7z0_xVgVuQj0RZ1UWOO0="

}
