import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners';

import { ElewaBrandsItalantaComponent } from './components/elewa-brands-italanta/elewa-brands-italanta.component';
import { ElewaBrandsElewaEducationComponent } from './components/elewa-brands-elewa-education/elewa-brands-elewa-education.component';
import { ElewaBrandsStakeholderComponent } from './components/elewa-brands-stakeholder/elewa-brands-stakeholder.component';
import { ElewaBrandsHeroComponent } from './components/elewa-brands-hero/elewa-brands-hero.component';
import { ElewaBrandsOpportunitiesComponent } from './components/elewa-brands-opportunities/elewa-brands-opportunities.component';
import { ElewaBrandsVentureLabsComponent } from './components/elewa-brands-venture-labs/elewa-brands-venture-labs.component';
import { ElewaBrandsCreativeHubComponent } from './components/elewa-brands-creative-hub/elewa-brands-creative-hub.component';
import { ElewaBrandsPageComponent } from './pages/elewa-brands-page/elewa-brands-page/elewa-brands-page.component';

import { BrandsRoutingModule } from './brands.routing';

@NgModule({
  imports: [CommonModule, LayoutModule, BannersModule, BrandsRoutingModule],
  declarations: [
    ElewaBrandsPageComponent,
    ElewaBrandsOpportunitiesComponent,
    ElewaBrandsVentureLabsComponent,
    ElewaBrandsItalantaComponent,
    ElewaBrandsElewaEducationComponent,
    ElewaBrandsStakeholderComponent,
    ElewaBrandsHeroComponent,
    ElewaBrandsCreativeHubComponent,
  ],
})
export class BrandsModule {}