import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact.routing';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from '@elewa-group/features/components/buttons';
import { LayoutModule} from '@elewa-group/elements/layout';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    ButtonsModule,
    LayoutModule,
  ],
  declarations: [ContactPageComponent, ContactFormComponent],
})
export class ContactPageModule {}
