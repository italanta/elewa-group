import { Component,Input } from '@angular/core';

@Component({
  selector: 'elewa-group-cooperative-section',
  templateUrl: './cooperative-section.component.html',
  styleUrls: ['./cooperative-section.component.scss'],
})
export class CooperativeSectionComponent {
  @Input() image_src = 'https://images.unsplash.com/photo-1461280360983-bd93eaa5051b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  @Input() paragraph_text = ['Elewa business have one common objective to unlock true potential of individuals, teams and communities. All our talents are enrolled in a persons growth track. In turn they contribute their own growth towards the growth of others, the group and their communities.']
}
