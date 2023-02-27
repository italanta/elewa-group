import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners';
import { CareersPageComponent } from './pages/careers-page/careers-page.component';

import { CareersRoutingModule } from './careers.routing';

@NgModule({
  imports: [CommonModule, LayoutModule, BannersModule, CareersRoutingModule],
  declarations: [CareersPageComponent],
})
export class PagesElewaCareersModule {}
