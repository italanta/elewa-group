import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialImpactFooterSectionComponent } from './social-impact-footer-section/social-impact-footer-section.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FooterComponent } from 'libs/elements/layout/src/lib/components/footer/footer.component';

@NgModule({
  imports: [CommonModule, LayoutModule],
  declarations: [SocialImpactFooterSectionComponent, FooterComponent],
  exports: [SocialImpactFooterSectionComponent]
})
export class PagesElewaSocialImpactModule {}
