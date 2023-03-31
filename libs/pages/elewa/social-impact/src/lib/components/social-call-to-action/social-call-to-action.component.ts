import { Component,Input } from '@angular/core';

@Component({
  selector: 'elewa-group-social-call-to-action',
  templateUrl: './social-call-to-action.component.html',
  styleUrls: ['./social-call-to-action.component.scss'],
})
export class SocialCallToActionComponent {
  @Input() message = "Become part of our mission";
  @Input() word = "and";
  @Input()callToActionText ="join elewa.";
  @Input()url= "/careers";
}
