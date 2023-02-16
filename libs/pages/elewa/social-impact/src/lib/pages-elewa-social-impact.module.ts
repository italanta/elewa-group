import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialImpactOpenKnowledgeComponent } from './component/social-impact-open-knowledge/social-impact-open-knowledge.component';
import { BannersModule } from '@elewa-group/features/components/banners';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';

@NgModule({
  imports: [CommonModule, BannersModule],

  declarations: [SocialImpactOpenKnowledgeComponent, SocialImpactPageComponent],
  exports:[SocialImpactPageComponent]
})
export class PagesElewaSocialImpactModule {}
