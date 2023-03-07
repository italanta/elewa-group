import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentureLabsPageComponent } from './pages/venture-labs-page/venture-labs-page.component';
import { VentureLabsRoutingModule } from './venture-labs.routing';
import { LayoutModule } from '@elewa-group/elements/layout';
import { VentureLabsStartupsComponent } from './components/venture-labs-startups/venture-labs-startups.component';

@NgModule({
  imports: [CommonModule, VentureLabsRoutingModule, LayoutModule],
  declarations: [VentureLabsPageComponent, VentureLabsStartupsComponent],
})
export class PagesElewaVentureLabsModule {}
