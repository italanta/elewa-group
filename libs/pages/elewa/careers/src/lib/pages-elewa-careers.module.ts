import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { CareersPageComponent } from './pages/careers-page/careers-page.component';
import { CareersHeroComponent } from './components/careers-hero/careers-hero.component';

@NgModule({
  imports: [CommonModule, LayoutModule],
  declarations: [CareersPageComponent, CareersHeroComponent],
})
export class PagesElewaCareersModule {}
