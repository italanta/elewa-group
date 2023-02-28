import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners';
import { ButtonsModule } from '@elewa-group/features/components/buttons';
import { ElewaBrandsOpportunitiesComponent } from './components/elewa-brands-opportunities/elewa-brands-opportunities.component';

import { ElewaBrandsPageComponent } from './pages/elewa-brands-page/elewa-brands-page/elewa-brands-page.component';

import { BrandsRoutingModule } from './brands.routing';
import { ElewaBrandsCreativeHubComponent } from './components/elewa-brands-creative-hub/elewa-brands-creative-hub.component';

@NgModule({
  imports: [CommonModule, LayoutModule, BannersModule, BrandsRoutingModule,ButtonsModule],
  declarations: [
    ElewaBrandsPageComponent,
    ElewaBrandsOpportunitiesComponent,
    ElewaBrandsCreativeHubComponent,
  ],
})
export class BrandsModule {}
