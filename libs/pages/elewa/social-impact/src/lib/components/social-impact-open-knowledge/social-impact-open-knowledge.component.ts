import { Component, Input} from '@angular/core';

@Component({
  selector: 'elewa-group-social-impact-open-knowledge',
  templateUrl: './social-impact-open-knowledge.component.html',
  styleUrls: ['./social-impact-open-knowledge.component.scss'],
})
export class SocialImpactOpenKnowledgeComponent {
@Input() paragraphs = ["What we learn, we share. Through community events, open knowledge repositories, regular teaching moments(everyone a teacher) and academic partnerships.", "We build for today, with a lens on tomorrow."]
}
