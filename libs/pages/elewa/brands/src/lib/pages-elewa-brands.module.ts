import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaBrandsPageComponent } from './pages/elewa-brands-page/elewa-brands-page/elewa-brands-page.component';

import { BrandsRoutingModule } from './brands.routing';

@NgModule({
  imports: [CommonModule, BrandsRoutingModule],
  declarations: [ElewaBrandsPageComponent],
})
export class PagesElewaBrandsModule {}
