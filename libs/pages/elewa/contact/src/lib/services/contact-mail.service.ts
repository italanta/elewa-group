import { Injectable } from '@angular/core';

import * as sgMail from '@sendgrid/mail';

import { ContactMail } from '../model/contact-mail.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactMailService {

  constructor() { }

  sendEmail(contactData: ContactMail) {
    sgMail.setApiKey(`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`);

    const contactMessage = {
      to: 'contact@elewa.ke',
      from: contactData.email,
      subject: 'Elewa Group Contact Form',
      text: contactData.message,
      html: `<p> ${contactData.message} </p>`
    }
    return sgMail.send(contactMessage);
  }
}
