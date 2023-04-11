import { Injectable } from '@angular/core';

import * as sgMail from '@sendgrid/mail';


@Injectable({
  providedIn: 'root'
})
export class ContactMailService {


  constructor() { }

  async sendEmail() {

    sgMail.setApiKey(`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`);

    const msg = {
      to: 'contact@elewa.ke',
      from: 'ian@elewa.ke',
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }

    return sgMail.send(msg).then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
