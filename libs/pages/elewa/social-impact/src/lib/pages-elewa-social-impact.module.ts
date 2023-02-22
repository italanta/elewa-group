import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { UiListsModule } from '@elewa-group/features/components/ui-lists';
import { SocialImpactHeroSectionComponent } from './components/social-impact-hero-section/social-impact-hero-section.component';
import { SocialImpactRoutingModule } from './social-impact.routing';
import { ImpactProjectsComponent } from './components/impact-projects/impact-projects.component';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';

@NgModule({
  imports: [CommonModule, LayoutModule, UiListsModule, SocialImpactRoutingModule],
  declarations: [
    SocialImpactPageComponent,
    SocialImpactHeroSectionComponent,
    ImpactProjectsComponent,
  ],
  exports: [SocialImpactPageComponent],
})
export class SocialImpactModule {}
