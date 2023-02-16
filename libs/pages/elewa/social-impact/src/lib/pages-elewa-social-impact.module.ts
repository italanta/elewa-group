import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';
import { SocialImpactSectionComponent } from './components/social-impact-section/social-impact-section.component';
import { SocialImpactModule } from './social-impact.routing';

@NgModule({
  imports: [CommonModule, LayoutModule, SocialImpactModule],
  declarations: [SocialImpactPageComponent, SocialImpactSectionComponent],
  exports: [SocialImpactPageComponent],
})
export class PagesElewaSocialImpactModule {}
