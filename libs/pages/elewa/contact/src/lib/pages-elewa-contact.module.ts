import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { ContactRoutingModule } from './contact.routing';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactBannerComponent } from './components/contact-banner/contact-banner.component';

@NgModule({
  imports: [CommonModule, ContactRoutingModule, LayoutModule],
  declarations: [ContactPageComponent, ContactBannerComponent],
})
export class ContactPageModule {}
