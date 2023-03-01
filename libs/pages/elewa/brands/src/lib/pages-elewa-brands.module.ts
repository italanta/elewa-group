import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';

import { ElewaBrandsPageComponent } from './pages/elewa-brands-page/elewa-brands-page/elewa-brands-page.component';

import { BrandsRoutingModule } from './brands.routing';
import { ElewaBrandsCreativeHubComponent } from './components/elewa-brands-creative-hub/elewa-brands-creative-hub.component';
import { ButtonsModule } from '@elewa-group/features/components/buttons';

@NgModule({
  imports: [CommonModule, BrandsRoutingModule, LayoutModule,ButtonsModule],
  declarations: [ElewaBrandsPageComponent, ElewaBrandsCreativeHubComponent],
})
export class PagesElewaBrandsModule {}
