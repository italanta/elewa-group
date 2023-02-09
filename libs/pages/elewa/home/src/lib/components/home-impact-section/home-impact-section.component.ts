import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-home-impact-section',
  templateUrl: './home-impact-section.component.html',
  styleUrls: ['./home-impact-section.component.scss'],
})
export class HomeImpactSectionComponent {
  @Input() title = 'Growing Capital Impacting Lives';
  @Input() image = 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
  @Input() description = `Elewa is proof that growing capital and impacting lives can work well together.
  Our group owned and managed by our founder, our employees (across our brands) and our network of 56 passionate angel investors.`
}
