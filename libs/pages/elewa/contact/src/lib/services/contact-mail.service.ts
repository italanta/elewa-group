import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Timestamp } from "@firebase/firestore";

import { ContactMail, SendGridMail } from '../model/contact-mail.interface';


@Injectable({
  providedIn: 'root'
})
export class ContactMailService {

  constructor(private _firestore: AngularFirestore) { }

  createEmailDoc(contactData: ContactMail) {

    var sentDate = Timestamp.fromDate(new Date());

    const contactMessage: SendGridMail = {
      to: 'contact@elewa.ke',
      contactEmail: contactData.email,
      message: {
        subject: 'Elewa Group Contact Form',
        text: contactData.message,
        html: `<p></p>`,
      },
      sentOn: sentDate
    }

    return this._firestore.collection<SendGridMail>("elewa-mails").add(contactMessage);
  }
}
