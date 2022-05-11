import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "a972cecf10f7dc",
    pass: "701c3c795acdc4"
  }
});


export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject, body}: SendMailData) {



     await transport.sendMail({
  from: 'Equipe Fedget <oi@feedget.com>',
  to: 'Kaique Mendes <kaiquegamerde@gmail.com>',
  subject,
  html: body,
});


  }
}