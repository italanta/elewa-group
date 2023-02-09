import { Component,Input } from '@angular/core';

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
  molestie dolor. Nullam vitae velit volutpat, tempor ipsum a, vehicula leo.
  Sed rutrum pretium facilisis. Vivamus ullamcorper purus mollis auctor
  viverra. Aenean cursus bibendum felis non vulputate. Proin sed massa vitae
  sapien tincidunt pulvinar. Nunc mauris est, dapibus non tellus id,
  vehicula fermentum urna. Nullam iaculis purus massa`
  @Input() imgSrc = "https://images.unsplash.com/photo-1675790463148-3b5ec3d62139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
}
