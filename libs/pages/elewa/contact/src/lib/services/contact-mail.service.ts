import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Timestamp } from "@firebase/firestore";

import { ContactMail } from '../model/contact-mail.interface';


@Injectable({
  providedIn: 'root'
})
export class ContactMailService {

  constructor(private _firestore: AngularFirestore) { }

  createEmailDoc(contactData: ContactMail): Promise<ContactMail> {

    var sentDate = Timestamp.fromDate(new Date());

    const contactMessage = {
      to: 'contact@elewa.ke',
      contactEmail: contactData.email,
      message: {
        subject: 'Elewa Group Contact Form',
        text: contactData.message,
        html: `<p></p>`,
      },
      sentOn: sentDate
    }

    return new Promise<ContactMail>((resolve, reject) => {
      this._firestore
        .collection("elewa-mails")
        .add(contactMessage);
    });
  }
}
