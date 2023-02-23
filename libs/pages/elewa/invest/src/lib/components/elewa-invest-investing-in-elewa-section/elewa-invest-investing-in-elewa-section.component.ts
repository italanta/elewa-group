import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-invest-investing-in-elewa-section',
  templateUrl: './elewa-invest-investing-in-elewa-section.component.html',
  styleUrls: ['./elewa-invest-investing-in-elewa-section.component.scss'],
})
export class ElewaInvestInvestingInElewaSectionComponent {
  image = "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690302/elewa-group-website/Images/f2b2ea6afc31e9720638da1bbd0d2d69_p58coq.png"
  titleText = "Investing in Elewa NV"
  backgroundColor = "var(--elewa-group-website-color)"
  paragraph: string[] = ['From time to time, we offer investment opportunities (private equity & debt) to out community of investors. Interested to take part when this opportunity arrives?'];
  imagePlacement = 'left'
}
