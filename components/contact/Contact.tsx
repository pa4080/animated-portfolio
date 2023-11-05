import React from "react";
import { Resend } from "resend";

import messages from "@/messages/en.json";
import manifest from "@/public/manifest.json";
import { cn } from "@/lib/cn-utils";

import styles from "./_contact.module.scss";
import EmailTemplate_Client from "./email-templates/EmailTemplate_Client";
import EmailTemplate_Admin from "./email-templates/EmailTemplate_Admin";
import RecaptchaContextWrapper from "./RecaptchaContextWrapper";
import { FormDataType } from "./ContactForm";
import { TextItem } from "./ContactText";

const resend = new Resend(process.env.RESEND_API_KEY);
const reCaptcha = {
	url: String(process.env.GOOGLE_reCAPTCHA_URL),
	secretKey: String(process.env.GOOGLE_reCAPTCHA_V3e_SECRET_KEY),
	siteKey: String(process.env.GOOGLE_reCAPTCHA_V3e_SITE_KEY),
	// We do not need NEXT_PUBLIC_GOOGLE_reCAPTCHA_V3_SITE_KEY
	// because we are passing it here to the "client" component
	scoreLimit: Number(process.env.GOOGLE_reCAPTCHA_SCORE_LIMIT),
};

export type ReCaptchaRes = {
	success: boolean; // Whether the reCAPTCHA was solved
	challenge_ts: string; // The timestamp of the reCAPTCHA
	hostname: string; // The hostname of the site where the reCAPTCHA was solved
	score: number; // The score of the reCAPTCHA
	action: string; // The action of the reCAPTCHA, defined within executeRecaptcha()
	error: unknown; // CUSTOM error message
	scoreLimit: number; // CUSTOM score limit of the reCAPTCHA
};

export type SendEmail = (formData: FormDataType) => Promise<{ ok: boolean; error: unknown }>;
export type reCaptchaSubmit = (token: string) => Promise<ReCaptchaRes>;

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
				subject: messages.Contact.emailContentAdmin.subject.replace(
					/{\s*site_name\s*}/,
					manifest.short_name
				),
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

	const reCaptchaSubmit: reCaptchaSubmit = async (googleReCaptchaToken: string) => {
		"use server";

		let response: ReCaptchaRes = {
			success: false,
			challenge_ts: "",
			hostname: "",
			score: 0,
			action: "",
			error: null,
			scoreLimit: reCaptcha.scoreLimit,
		};

		try {
			const reCaptchaRes: ReCaptchaRes = await (
				await fetch(reCaptcha.url, {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: `secret=${reCaptcha.secretKey}&response=${googleReCaptchaToken}`,
					cache: "no-cache",
				})
			).json();

			response = { ...response, ...reCaptchaRes };
		} catch (err) {
			response.error = `Something went wrong with reCAPTCHA: ${err}`;
		}

		return response;
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
				<RecaptchaContextWrapper
					contactForm={{ sendEmail, reCaptchaSubmit }}
					contactText={{ title: messages.Contact.title, textItems }}
					reCaptchaSiteKey={reCaptcha.siteKey}
				/>
			</div>
		</div>
	);
};

export default Contact;
