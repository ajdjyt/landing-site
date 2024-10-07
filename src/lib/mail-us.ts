import { preprocessCSS } from "vite";

import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';

const auth:any = {
  auth: {
    api_key: process.env.mailgun_key,
    domain: process.env.mailgun_mail_domain
  }
}

const mail= "mailer@" + process.env.mailgun_mail_domain;

const recipient = process.env.mailgun_mail_recipient;

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

function mailQuery(query:any){
    nodemailerMailgun.sendMail({
        from: mail,
        to: recipient,
        subject: 'Recieved Query',
        'replyTo': '',
        text: query.data
      }, (err, info) => {
        if (err) {
          console.log(`Error: ${err}`);
        }
        else {
          console.log(`Response: ${info}`);
        }
      });
}