import React from "react";
import { Resend } from "resend";

import messages from "@/messages/en.json";
import { cn } from "@/lib/cn-utils";

import styles from "./_contact.module.scss";
import ContactForm, { FormDataType } from "./ContactForm";
import EmailTemplate_Client from "./email-templates/EmailTemplate_Client";
import EmailTemplate_Admin from "./email-templates/EmailTemplate_Admin";
import ContactText, { TextItem } from "./ContactText";

const resend = new Resend(process.env.RESEND_API_KEY);

export type SendEmail = (formData: FormDataType) => Promise<{ ok: boolean; error: unknown }>;

interface Props {
	className?: string;
}

const Contact: React.FC<Props> = ({ className }) => {
	const sendEmail: SendEmail = async (formData: FormDataType) => {
		"use server";

		// https://resend.com/docs/send-with-nextjs
		try {
			const sendEmail_Client = await resend.emails.send({
				from: `${String(process.env.NEXT_PUBLIC_ME_EMAIL)} <${String(
					process.env.NEXT_PUBLIC_ME_EMAIL
				)}>`,
				text: formData.message,
				to: formData.email,
				subject: messages.Contact.emailContentClint.subject.replace(
					/{\s*admin\s*}/,
					String(process.env.NEXT_PUBLIC_ME_FIRST_NAME)
				),
				react: EmailTemplate_Client(formData),
			});

			if (sendEmail_Client.error) {
				throw new Error("Error sending client email: " + sendEmail_Client.error);
			}

			const sendEmail_Admin = await resend.emails.send({
				from: `${String(process.env.NEXT_PUBLIC_ME_EMAIL)} <${String(
					process.env.NEXT_PUBLIC_ME_EMAIL
				)}>`,
				text: formData.message,
				to: String(process.env.NEXT_PUBLIC_ME_EMAIL),
				subject: messages.Contact.emailContentAdmin.subject,
				react: EmailTemplate_Admin(formData),
			});

			if (sendEmail_Admin.error) {
				throw new Error("Error sending client email: " + sendEmail_Admin.error);
			}

			return { ok: true, error: null };
		} catch (error) {
			console.error(error);

			return { ok: false, error };
		}
	};

	const textItems: TextItem[] = messages.Contact.items
		.filter((item) => item.active)
		.map((item) => ({
			// No mather the process.env variables are marked as NEXT_PUBLIC_
			// calling them in this way (in a loop) requires server side rendering!
			title: item.title,
			text: String(process.env[`NEXT_PUBLIC_ME_${item.title.toUpperCase()}`]),
		}));

	return (
		<div className={cn(styles.contact, className)}>
			<div className={cn(styles.wrapper, className)}>
				<ContactText textItems={textItems} title={messages.Contact.title} />
				<ContactForm sendEmail={sendEmail} />
			</div>
		</div>
	);
};

export default Contact;
