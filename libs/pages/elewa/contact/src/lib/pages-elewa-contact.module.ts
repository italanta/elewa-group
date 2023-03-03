import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact.routing';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactBannerComponent } from './contact-banner/contact-banner.component';

@NgModule({
  imports: [CommonModule, ContactRoutingModule],
  declarations: [ContactPageComponent, ContactBannerComponent],
})
export class ContactPageModule {}
