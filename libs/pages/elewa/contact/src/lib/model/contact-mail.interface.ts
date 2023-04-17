
export interface ContactMail {
  name: string;
  companyName: string;
  email: string;
  message: string;
  sentOn: Date;
}

export interface SendGridMail {
  to: string;
  contactEmail: string;
  message: {
    subject: string;
    text: string;
    html: string;
  };
  sentOn: Date;
}