import { Injectable } from '@angular/core';

import { GoogleTagManagerService } from 'angular-google-tag-manager';

import { ContactMail, SendGridMail } from '../model/contact-mail.interface';


@Injectable({
  providedIn: 'root'
})
export class ContactMailService {

  constructor(private _gtmService: GoogleTagManagerService) {}

  createEmailDoc(contactData: ContactMail) {
    const gtmTag = {
      event: 'submit-contact-form',
      eventCategory: 'Form Submitted',
      eventAction: 'Contact Form',
      pageName: '/contact',
      subject: contactData.message
    };

    return this._gtmService.pushTag(gtmTag);
  }
}
