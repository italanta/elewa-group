import { NgModule,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialImpactComponent } from './social-impact/social-impact.component';
import { LayoutModule } from '@elewa-group/elements/layout'; 

@NgModule({
  imports: [CommonModule, LayoutModule],
  declarations: [SocialImpactComponent],
  exports: [SocialImpactComponent]
})
export class PagesElewaSocialImpactModule {}

