import * as React from "react";

import messages from "@/messages/en.json";

import { FormDataType } from "../ContactForm";

const msg = messages.Contact.emailContentAdmin;

type EmailTemplateProps = FormDataType;

const EmailTemplate_Admin: React.FC<Readonly<EmailTemplateProps>> = ({ name, message, email }) => (
	<div>
		<p>
			<b> {msg.subject} </b>
		</p>
		<p>
			{msg.name} <b>{name}</b>
		</p>
		<p>
			{msg.email} <b>{email}</b>
		</p>
		<p> {msg.message} </p>
		<p>
			<em> {message} </em>
		</p>
	</div>
);

export default EmailTemplate_Admin;
