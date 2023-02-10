import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ElewaGroupButtonWithAnimationComponent } from './elewa-group-button-with-animation/elewa-group-button-with-animation.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ElewaGroupButtonWithAnimationComponent],
  exports: [ElewaGroupButtonWithAnimationComponent],
})

export class ButtonsModule {}