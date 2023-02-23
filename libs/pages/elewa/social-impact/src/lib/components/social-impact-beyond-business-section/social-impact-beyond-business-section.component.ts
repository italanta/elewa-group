import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-social-impact-beyond-business-section',
  templateUrl: './social-impact-beyond-business-section.component.html',
  styleUrls: ['./social-impact-beyond-business-section.component.scss'],
})
export class SocialImpactBeyondBusinessSectionComponent {
  imageURL = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Images/IMG_0764_twyo3k.png'
  paragraphTexts = [`Some of that youthful energy is channeled beyond
  business. Through projects such as our coding school
  in Kakuma refugee camo, training teachers in pastoral Samburu and our open-source coding initiatives
  providing entry-level opportunities to hundreds of 
  junior engineers.`,`These projects dont't necessarily have an immediate 
  financial return, but their impact can be tangibly
  measured in the long-term.`]
  titleText = `Beyond business`
  imagePlacement = 'left'
  backgroundColor = 'white'
}
