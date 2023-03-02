import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners';

import { ElewaBrandsOpportunitiesComponent } from './components/elewa-brands-opportunities/elewa-brands-opportunities.component';

import { ElewaBrandsPageComponent } from './pages/elewa-brands-page/elewa-brands-page/elewa-brands-page.component';

import { BrandsRoutingModule } from './brands.routing';
import { ElewaBrandsStakeholderComponent } from './components/elewa-brands-stakeholder/elewa-brands-stakeholder.component';
import { ElewaBrandsHeroComponent } from './components/elewa-brands-hero/elewa-brands-hero.component';
import {ElewaBrandsCreativeHubComponent} from './components/elewa-brands-creative-hub/elewa-brands-creative-hub.component'
import { ButtonsModule } from '@elewa-group/features/components/buttons';
@NgModule({
  imports: [CommonModule, LayoutModule, BrandsRoutingModule,ButtonsModule,BannersModule],
  declarations: [
    ElewaBrandsPageComponent,
    ElewaBrandsOpportunitiesComponent,
    ElewaBrandsStakeholderComponent,
    ElewaBrandsHeroComponent,
    ElewaBrandsCreativeHubComponent,

  ],
})
export class BrandsModule {}
