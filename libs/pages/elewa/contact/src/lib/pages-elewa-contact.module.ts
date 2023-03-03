import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact.routing';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactBannerComponent } from './components/contact-banner/contact-banner.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ButtonsModule } from '@elewa-group/features/components/buttons';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ContactRoutingModule,ButtonsModule,ReactiveFormsModule],
  declarations: [
    ContactPageComponent,
    ContactBannerComponent,
    ContactFormComponent,
  ],
})
export class ContactPageModule {}
