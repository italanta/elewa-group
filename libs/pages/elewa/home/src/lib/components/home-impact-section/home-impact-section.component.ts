import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-home-impact-section',
  templateUrl: './home-impact-section.component.html',
  styleUrls: ['./home-impact-section.component.scss'],
})
export class HomeImpactSectionComponent {
  @Input() title = 'Growing Capital Impacting Lives';
  @Input() image = 'https://res.cloudinary.com/db15gy9h6/image/upload/v1675949508/Screenshot_from_2023-02-09_16-26-20_zdx7mn.png'
  @Input() description = `Elewa is proof that growing capital and impacting lives can work well together.
  Our group owned and managed by our founder, our employees (across our brands) and our network of 56 passionate angel investors.`
}
