import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-investing-in-elewa',
  templateUrl: './investing-in-elewa.component.html',
  styleUrls: ['./investing-in-elewa.component.scss'],
})
export class InvestingInElewaComponent {
  paragraphText : string[] = ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nulla vitae recusandae doloremque. Consectetur quia dolores rerum, error laudantium eligendi, nesciunt id quam corporis, magni aliquam consequuntur eos doloribus eum.']
  Url = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690302/elewa-group-website/Images/f2b2ea6afc31e9720638da1bbd0d2d69_p58coq.png'
  placement = 'left'
  bgColor = 'white'
  textTitle = 'Investing in Elewa NV'
  btnText = 'Join the waiting list'
  linkUrl = 'social-impact/en'
  toggleButton = true;
}
