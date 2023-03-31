import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: './elewa-group-team-member',
  templateUrl: './elewa-group-team-member.component.html',
  styleUrls: ['./elewa-group-team-member.component.scss'],

})
export class ElewaGroupTeamMemberComponent {

 //some scaffold text
  @Input() teamMembers: any = [];
  @Input() currentBannerIndex = 0;

  @Output() closeTeamMemberViewTriggered = new EventEmitter();

  constructor() {}

  nextBanner() {
    this.currentBannerIndex = (this.currentBannerIndex + 1) % this.teamMembers.length;
  }

  previousBanner() {
    this.currentBannerIndex = (this.currentBannerIndex - 1 + this.teamMembers.length) % this.teamMembers.length;
  }
  
  get progressPercentage() {
    return (this.currentBannerIndex + 1) / this.teamMembers.length * 100;
  }

  closeTeamMemberView() {
    this.closeTeamMemberViewTriggered.emit();
  }
  
}