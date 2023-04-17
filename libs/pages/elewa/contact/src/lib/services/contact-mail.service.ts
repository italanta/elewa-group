import { Injectable } from '@angular/core';

import { ContactMail, SendGridMail } from '../model/contact-mail.interface';


@Injectable({
  providedIn: 'root'
})
export class ContactMailService {

  constructor() {}

  createEmailDoc(contactData: ContactMail) {

    const sentDate = new Date();

    const contactMessage: SendGridMail = {
      to: 'contact@elewa.ke',
      contactEmail: contactData.email,
      message: {
        subject: 'Elewa Group Contact Form',
        text: contactData.message,
        html: `<p></p>`,
      },
      sentOn: sentDate
    };

    return new Promise((resolve, reject) => {})
  }
}
