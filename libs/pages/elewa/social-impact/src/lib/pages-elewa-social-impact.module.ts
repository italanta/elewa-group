import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { SocialImpactComponent } from './social-impact/social-impact.component';

@NgModule({
  imports: [CommonModule,LayoutModule],
  declarations: [SocialImpactComponent],
  exports:[SocialImpactComponent]
})
export class PagesElewaSocialImpactModule {}
