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
  @Input() imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCfoejJofpCmw5_L_RF8yUF1i2J7wpJbx6UBBgkekPpWi2GUtd4RR95sI_kGWBhlTdWjM&usqp=CAU"
}
