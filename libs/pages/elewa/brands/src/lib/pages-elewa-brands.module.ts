import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners'; 

import { ElewaBrandsPageComponent } from './pages/elewa-brands-page/elewa-brands-page/elewa-brands-page.component';

import { BrandsRoutingModule } from './brands.routing';
import { BrandsOpportunitiesComponent } from './components/brands-opportunities/brands-opportunities.component';

@NgModule({
  imports: [CommonModule, BrandsRoutingModule, LayoutModule, BannersModule],
  declarations: [ElewaBrandsPageComponent, BrandsOpportunitiesComponent],
})
export class PagesElewaBrandsModule {}
