import { Component, Input  } from '@angular/core';

@Component({
  selector: 'elewa-group-impact-section',
  templateUrl: './impact-section.component.html',
  styleUrls: ['./impact-section.component.scss'],
})
export class ImpactSectionComponent{
  @Input () heading = "Growing capital impacting lives"
  @Input () paragraph1 = "Elewa is proof the growing capital and impacting lives can work well together."
  @Input () paragraph2 = "Our group owned and managed by our founder, our <br/>employees(across our brands) and our network of 56<br/> passionate angel investors.<br/><br/><br/><br/></"
  @Input () img_src= "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1hcmtldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60"
}
