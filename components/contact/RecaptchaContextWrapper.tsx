"use client";

import React from "react";
// Note: GoogleReCaptchaProvider require "use client", so we cannot include it in layout.tsx
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import ContactForm from "./ContactForm";
import ContactText, { TextItem } from "./ContactText";

import type { reCaptchaSubmit, SendEmail } from "./Contact";

interface Props {
	reCaptchaSiteKey: string;
	contactText: {
		className?: string;
		title: string;
		textItems: TextItem[];
	};
	contactForm: {
		className?: string;
		sendEmail: SendEmail;
		reCaptchaSubmit: reCaptchaSubmit;
	};
}

const RecaptchaContextWrapper: React.FC<Props> = ({
	reCaptchaSiteKey,
	contactText,
	contactForm,
}) => {
	return (
		<GoogleReCaptchaProvider
			container={{
				parameters: {
					badge: "bottomleft",
					theme: "dark",
				},
			}}
			reCaptchaKey={reCaptchaSiteKey}
			scriptProps={{
				async: true,
				defer: false,
				appendTo: "head",
				nonce: undefined,
			}}
			useEnterprise={true}
		>
			<ContactText {...contactText} />
			<ContactForm {...contactForm} />
			{/* <div
				className="w-12 h-12 bg-red-500 absolute right-0 bottom-0"
				id="custom-recaptcha-container"
			/> */}
		</GoogleReCaptchaProvider>
	);
};

export default RecaptchaContextWrapper;
