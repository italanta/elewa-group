import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialImpactComponent } from 'libs/pages/elewa/social-impact/src/lib/social-impact/social-impact/social-impact.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SocialImpactComponent],
  exports: [SocialImpactComponent]
})
export class PagesElewaSocialImpactModule {}
