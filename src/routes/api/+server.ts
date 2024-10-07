import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';
import { fail } from '@sveltejs/kit';

const auth:any = {
  auth: {
    api_key: process.env.mailgun_key,
    domain: process.env.mailgun_mail_domain
  }
};

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const query = data.get('query');

    const mail = `mailer@${process.env.mailgun_mail_domain}`;
    const recipient = process.env.mailgun_mail_recipient;

    try {
      const info = await nodemailerMailgun.sendMail({
        from: mail,
        to: recipient,
        subject: 'Received Query',
        text: query
      });
      
      return { success: true, message: `Email sent: ${info.messageId}` };
    } catch (error) {
      console.error(`Error sending email: ${error}`);
      return fail(500, { error: 'Failed to send email' });
    }
  }
};
