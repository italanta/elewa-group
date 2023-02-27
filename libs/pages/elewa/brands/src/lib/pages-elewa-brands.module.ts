import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners';
import { ElewaBrandsPageComponent } from './pages/elewa-brands-page/elewa-brands-page/elewa-brands-page.component';

import { BrandsRoutingModule } from './brands.routing';
import { ElewaBrandsOpportunitiesComponent } from './components/elewa-brands-opportunities/elewa-brands-opportunities.component';

@NgModule({
  imports: [CommonModule, BrandsRoutingModule, LayoutModule, BannersModule],
  declarations: [ElewaBrandsPageComponent, ElewaBrandsOpportunitiesComponent],
  exports: [ElewaBrandsOpportunitiesComponent]
})
export class PagesElewaBrandsModule {}
