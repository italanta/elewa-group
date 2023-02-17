import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-social-impact-beyond-business-section',
  templateUrl: './social-impact-beyond-business-section.component.html',
  styleUrls: ['./social-impact-beyond-business-section.component.scss'],
})
export class SocialImpactBeyondBusinessSectionComponent {
  imageUrl = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Images/IMG_0764_twyo3k.png'
  title = 'Beyond Business'
  paragraph = `Some of that youthful energy is channeled beyond business. Through projects such as our coding school in Kakuma refugee camp, training teachers in pastoral Samburu and our open-source coding initiatives providing entry-level oppurtunities to hundreds of junior engineers.
  `
  paragraph2 = 'These projects don\'t necessarily have an immediate financial return, but their impact can be tangibly measured in the long-term'
  backgroundColor="var(--elewa-group-website-color)"
  imagePlacement = 'left'
}
