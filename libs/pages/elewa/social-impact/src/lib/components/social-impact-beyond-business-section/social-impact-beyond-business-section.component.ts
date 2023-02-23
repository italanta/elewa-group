import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-social-impact-beyond-business-section',
  templateUrl: './social-impact-beyond-business-section.component.html',
  styleUrls: ['./social-impact-beyond-business-section.component.scss'],
})
export class SocialImpactBeyondBusinessSectionComponent {
  @Input () title = ["Beyond Business"]
  @Input() paragraphs = ["Some of that youthful energy is channeled beyond business. Through projects such as our coding school in Kakuma refugee camp, training teachers in pastoral Samburu and our open-source coding initiatives providing entry-level opportunities to hundreds of junior engineers.", "These projects don't necessarily have an immediate financial return, but their impact can be tangibly measured in the long-term."]

}


