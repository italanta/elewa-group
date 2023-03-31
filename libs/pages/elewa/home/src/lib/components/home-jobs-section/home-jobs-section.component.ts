import { Component,Input } from '@angular/core';

@Component({
  selector: 'elewa-group-home-jobs-section',
  templateUrl: './home-jobs-section.component.html',
  styleUrls: ['./home-jobs-section.component.scss'],
})
export class HomeJobsSectionComponent {
    @Input() message =" Become part of the family";
    @Input() callToActionText ="open opportunities.";
    @Input() word ="View";
    @Input() url ="/careers";
} 
