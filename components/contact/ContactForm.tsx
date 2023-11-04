"use client";

import React from "react";

import { BsSendPlus, BsSendCheck, BsSendX } from "react-icons/bs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useToast } from "@/components/ui/use-toast";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import messages from "@/messages/en.json";

import styles from "./_contact.module.scss";

import type { SendEmail } from "./Contact";

const formMsgs = messages.Contact.form;

const formSchema = z.object({
	name: z.string().min(formMsgs.name.minLength, {
		message: formMsgs.name.error,
	}),
	email: z.string().email({
		message: formMsgs.email.error,
	}),
	message: z.string().min(formMsgs.message.minLength, {
		message: formMsgs.message.error,
	}),
});

export type FormDataType = z.infer<typeof formSchema>;

interface Props {
	sendEmail: SendEmail;
}

const ContactForm: React.FC<Props> = ({ sendEmail }) => {
	const { toast } = useToast();

	const form = useForm<FormDataType>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	async function onSubmit(formData: FormDataType) {
		toast({
			title: messages.Contact.toast.submitted,
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 overflow-auto">
					<code className="text-white">{JSON.stringify(formData, null, 2)}</code>
				</pre>
			),
		});

		try {
			const res = await sendEmail(formData);

			if (res.ok) {
				form.reset();

				toast({
					description: (
						<div className="flex items-center gap-2 justify-between">
							<span className="text-base">{messages.Contact.toast.success}</span>
							<span className="text-3xl">
								<BsSendCheck />
							</span>
						</div>
					),
				});
			} else {
				throw new Error("Error sending email: " + res.error);
			}
		} catch (error) {
			console.error(error);

			toast({
				description: (
					<div className="flex items-center gap-2 justify-between">
						<span className="text-base">{messages.Contact.toast.error}</span>
						<span className="text-3xl">
							<BsSendX />
						</span>
					</div>
				),
				variant: "destructive",
			});
		}
	}

	return (
		<Form {...form}>
			<form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel className={styles.fieldLabel}>{formMsgs.name.label}</FormLabel>
							<FormControl>
								<Input placeholder={formMsgs.name.placeholder} {...field} />
							</FormControl>
							{form.formState?.errors?.name ? (
								<FormMessage />
							) : (
								<FormDescription>{formMsgs.name.description}</FormDescription>
							)}
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel className={styles.fieldLabel}>{formMsgs.email.label}</FormLabel>
							<FormControl>
								<Input placeholder={formMsgs.email.placeholder} {...field} />
							</FormControl>
							{form.formState?.errors?.email ? (
								<FormMessage />
							) : (
								<FormDescription>{formMsgs.email.description}</FormDescription>
							)}
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel className={styles.fieldLabel}>{formMsgs.message.label}</FormLabel>
							<FormControl>
								<Textarea
									className="resize-none"
									placeholder={formMsgs.message.placeholder}
									{...field}
								/>
							</FormControl>
							{form.formState?.errors?.message ? (
								<FormMessage />
							) : (
								<FormDescription>{formMsgs.message.description}</FormDescription>
							)}
						</FormItem>
					)}
				/>

				<Button className={styles.button} type="submit">
					<span className={styles.btnText}>{messages.Buttons.submit}</span>
					<span className={styles.btnIcon}>
						<BsSendPlus />
					</span>
				</Button>
			</form>
		</Form>
	);
};

export default ContactForm;
