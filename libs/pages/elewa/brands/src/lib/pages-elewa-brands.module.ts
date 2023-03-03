import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners';

import { ElewaBrandsOpportunitiesComponent } from './components/elewa-brands-opportunities/elewa-brands-opportunities.component';

import { ElewaBrandsPageComponent } from './pages/elewa-brands-page/elewa-brands-page/elewa-brands-page.component';

import { BrandsRoutingModule } from './brands.routing';
import { ElewaBrandsStakeholderComponent } from './components/elewa-brands-stakeholder/elewa-brands-stakeholder.component';
import { ElewaBrandsHeroComponent } from './components/elewa-brands-hero/elewa-brands-hero.component';
import { ElewaBrandsItalantaComponent } from './components/elewa-brands-italanta/elewa-brands-italanta.component';

@NgModule({
  imports: [CommonModule, LayoutModule, BannersModule, BrandsRoutingModule],
  declarations: [
    ElewaBrandsPageComponent,
    ElewaBrandsOpportunitiesComponent,
    ElewaBrandsStakeholderComponent,
    ElewaBrandsHeroComponent,
    ElewaBrandsItalantaComponent,
  ],
})
export class BrandsModule {}
