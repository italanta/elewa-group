import { Component,Input } from '@angular/core';

@Component({
  selector: 'elewa-group-careers-value-proposition',
  templateUrl: './careers-value-proposition.component.html',
  styleUrls: ['./careers-value-proposition.component.scss'],
})
export class CareersValuePropositionComponent {
  @Input() imageUrl1="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690303/elewa-group-website/Images/IMG_6523_vabpyo.png"
  @Input() imageUrl2="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690302/elewa-group-website/Images/CHU-5670_yqvk0y.png"
  @Input() paragraph=`Elewa searches for and develops talent in underrepresented
  areas, connecting them to equal opportunities on a global 
  scale. We believe in leveling the playing field and placing
  unique people at the center of their work, taking into account their 
  unique characteeristics and goals. We also prioritize self-
  growth and fosstering growth in others, with a cooperative 
  mindset and a commitmnent to mutual success and support.`
  @Input() title="Why Elewa?"
}
