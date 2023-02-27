import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners';

import { ElewaBrandsOpportunitiesComponent } from './components/elewa-brands-opportunities/elewa-brands-opportunities.component';

import { ElewaBrandsPageComponent } from './pages/elewa-brands-page/elewa-brands-page/elewa-brands-page.component';

import { BrandsRoutingModule } from './brands.routing';
import { ElewaBrandsElewaEducationComponent } from './components/elewa-brands-elewa-education/elewa-brands-elewa-education.component';
import { ElewaBrandsItalantaComponent } from './components/elewa-brands-italanta/elewa-brands-italanta.component';
import { ElewaBrandsCreativeHubComponent } from './components/elewa-brands-creative-hub/elewa-brands-creative-hub.component';

@NgModule({
  imports: [CommonModule, LayoutModule, BannersModule, BrandsRoutingModule],
  declarations: [
    ElewaBrandsPageComponent,
    ElewaBrandsOpportunitiesComponent,
    ElewaBrandsElewaEducationComponent,
    ElewaBrandsItalantaComponent,
    ElewaBrandsCreativeHubComponent,
  ],
})
export class BrandsModule {}
