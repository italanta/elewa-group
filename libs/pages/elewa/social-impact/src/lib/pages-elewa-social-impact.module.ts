import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialImpactOpenKnowledgeComponent } from './components/social-impact-open-knowledge/social-impact-open-knowledge.component';
import { BannersModule } from '@elewa-group/features/components/banners';

@NgModule({
  imports: [CommonModule, BannersModule],
  declarations: [SocialImpactOpenKnowledgeComponent],
  exports: [SocialImpactOpenKnowledgeComponent]
})
export class PagesElewaSocialImpactModule {}
