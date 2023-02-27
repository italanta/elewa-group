import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';


import { ElewaBrandsPageComponent } from './pages/elewa-brands-page/elewa-brands-page/elewa-brands-page.component';

import { BrandsRoutingModule } from './brands.routing';

@NgModule({
  imports: [CommonModule, BrandsRoutingModule, LayoutModule],
  declarations: [ElewaBrandsPageComponent],
})
export class PagesElewaBrandsModule {}
