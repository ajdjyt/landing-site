import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';
import { fail } from '@sveltejs/kit';

const apiKey = process.env.mailgun_key;
const domain = process.env.mailgun_mail_domain;

if (!apiKey || !domain) {
	throw new Error('Mailgun API key or domain is not set in environment variables');
}
const auth = {
	auth: {
		api_key: apiKey,
		domain: domain
	}
};

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

export const POST = async ({ request }: { request: Request }) => {
	const data = await request.formData();

	const userEmail = data.get('userEmail') as string;
	const userName = data.get('userName') as string;
	const userMessage = data.get('userMessage') as string;

	if (!userEmail || !userName || !userMessage) {
		return new Response(JSON.stringify({ error: 'Missing required form fields' }), {
			status: 400,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}

	const mail = `mailer@${domain}`;
	const recipient = process.env.mailgun_mail_recipient;

	try {
		const info = await nodemailerMailgun.sendMail({
			from: mail,
			to: recipient,
			subject: `Received Query from ${userName}`,
			text: `Query from ${userName} \n Mail: ${userEmail} \n\n ${userMessage}`
		});

		return new Response(
			JSON.stringify({ success: true, message: `Email sent: ${info.messageId}` }),
			{ status: 200 }
		);
	} catch (error) {
		if (error instanceof Error) {
			console.log(`Error sending email: ${error.message || error}`, error.stack);
		} else {
			console.log(`Error sending email: ${error}`);
		}
		return new Response(JSON.stringify({ error: 'Failed to send email' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
