
import { ElewaBrandsElewaEducationComponent } from './components/elewa-brands-elewa-education/elewa-brands-elewa-education.component';
import { ElewaBrandsOpportunitiesComponent } from './components/elewa-brands-opportunities/elewa-brands-opportunities.component';
import { ElewaBrandsHeroComponent } from './components/elewa-brands-hero/elewa-brands-hero.component';

import { ElewaBrandsPageComponent } from './pages/elewa-brands-page/elewa-brands-page/elewa-brands-page.component';
import { BrandsRoutingModule } from './brands.routing';
@NgModule({
  imports: [CommonModule, LayoutModule, BannersModule, BrandsRoutingModule],
  declarations: [
    ElewaBrandsPageComponent,
    ElewaBrandsOpportunitiesComponent,
    ElewaBrandsElewaEducationComponent,
    ElewaBrandsHeroComponent,

  ],
})
export class BrandsModule {}