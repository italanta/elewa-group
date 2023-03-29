import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-invest-investing-in-elewa-section',
  templateUrl: './elewa-invest-investing-in-elewa-section.component.html',
  styleUrls: ['./elewa-invest-investing-in-elewa-section.component.scss'],
})
export class ElewaInvestInvestingInElewaSectionComponent {
  image = "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983082/elewa-group-website/Images/invest-now_ftxg4z.jpg"
  titleText = "Investing in Elewa NV"
  backgroundColor = "var(--elewa-group-website-color)"
  paragraph: string[] = ['From time to time, we offer investment opportunities (private equity & debt) to out community of investors. Interested to take part when this opportunity arrives?'];
  imagePlacement = 'left'
  buttonText = "Join the waiting list";
  url = "home/en";
  showButton = true;
}
