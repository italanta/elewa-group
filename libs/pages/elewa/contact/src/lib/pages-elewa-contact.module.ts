import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact.routing';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ButtonsModule } from '@elewa-group/features/components/buttons';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactBannerComponent } from './contact-banner/contact-banner.component';

@NgModule({
  imports: [CommonModule, ContactRoutingModule,ButtonsModule,ReactiveFormsModule],
  declarations: [
    ContactPageComponent,
    ContactFormComponent,
    ContactBannerComponent,
  ],
})
export class ContactPageModule {}