"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

import { cn } from "@/lib/cn-utils";

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
	className?: string;
	sendEmail: SendEmail;
}

const ContactForm: React.FC<Props> = ({ className, sendEmail }) => {
	const ref = useRef(null);
	// Note motion.path doesn't work with whileInView={},
	// so we use useInView(ref) -> animate={isInView && {}}
	const isInView = useInView(ref);

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
			const response = await sendEmail(formData);

			if (response.ok) {
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
				throw new Error("Error sending email: " + response.error);
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
		<div ref={ref} className={cn(styles.formContainer, className)}>
			<Form {...form}>
				<motion.form
					animate={isInView && { opacity: 1 }}
					className={styles.form}
					initial={{ opacity: 0 }}
					transition={{ delay: 4.5, duration: 1 }}
					onSubmit={form.handleSubmit(onSubmit)}
					// whileInView={{ opacity: 1 }}
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel className={styles.fieldLabel}>{formMsgs.name.label}</FormLabel>
								<FormControl>
									<Input placeholder={formMsgs.name.placeholder} {...field} autoComplete="name" />
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
									<Input placeholder={formMsgs.email.placeholder} {...field} autoComplete="email" />
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
				</motion.form>
			</Form>

			<motion.div
				animate={isInView && { opacity: 0 }}
				className={styles.formCoverSvg}
				initial={{ opacity: 1 }}
				transition={{ delay: 3.5, duration: 1 }}
				// whileInView={{ opacity: 0 }}
			>
				<svg
					fill="none"
					height="100%"
					viewBox="0 0 24 24"
					width="100%"
					xmlns="http://www.w3.org/2000/svg"
				>
					<motion.path
						animate={isInView && { pathLength: 1, opacity: 1 }}
						d="M16.5485 20.9074C16.7993 21.3985 16.6058 22.0046 16.0939 22.2098C13.9858 23.0552 11.6589 23.2302 9.43437 22.6966C6.885 22.0852 4.63785 20.5833 3.09784 18.4616C1.55783 16.3399 0.82623 13.7379 1.03488 11.1246C1.24352 8.51121 2.37869 6.0583 4.23584 4.20784C6.09298 2.35738 8.54997 1.23105 11.1641 1.03182C13.7782 0.832594 16.3775 1.57356 18.4936 3.12121C20.6097 4.66885 22.1035 6.9214 22.7058 9.47296C22.9026 10.3069 23 11.1549 23 12L23 12.0022C22.9999 12.5715 22.9555 13.1396 22.8676 13.7012C22.5877 15.7731 21.7158 19 19 19C16.6669 19 15.889 17.6669 15.6297 16.778C14.6219 17.5448 13.3641 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 12 18 14 17.9985 16C18 17 18.5 17 18.5 17C19.427 17 20.0112 16.2367 20.3791 15.3067C20.3882 15.2749 20.3987 15.2434 20.4106 15.2122C20.4524 15.1026 20.4921 14.9924 20.5296 14.8815C20.9613 13.5182 21 12 21 12H21.0031C21.0031 11.3083 20.9234 10.6143 20.7623 9.93171C20.2694 7.84334 19.0467 5.99971 17.3148 4.73301C15.5828 3.46632 13.4554 2.85986 11.3158 3.02292C9.17626 3.18599 7.1653 4.10785 5.64529 5.62239C4.12529 7.13693 3.19619 9.14455 3.02542 11.2835C2.85465 13.4224 3.45343 15.5521 4.71388 17.2886C5.97433 19.0251 7.81354 20.2544 9.90012 20.7548C11.6616 21.1773 13.5015 21.057 15.1819 20.4221C15.6977 20.2273 16.2977 20.4164 16.5485 20.9074Z M7.99803 12C7.99803 14.2102 9.78977 16.002 12 16.002C14.2102 16.002 16.002 14.2102 16.002 12C16.002 9.78978 14.2102 7.99803 12 7.99803C9.78977 7.99803 7.99803 9.78978 7.99803 12Z"
						initial={{ pathLength: 0, opacity: 0 }}
						transition={{ delay: 0.5, duration: 2.5 }}
					/>
					<motion.path
						animate={isInView && { pathLength: 1, opacity: 1 }}
						d="M7.99803 12C7.99803 14.2102 9.78977 16.002 12 16.002C14.2102 16.002 16.002 14.2102 16.002 12C16.002 9.78978 14.2102 7.99803 12 7.99803C9.78977 7.99803 7.99803 9.78978 7.99803 12Z"
						initial={{ pathLength: 0, opacity: 0 }}
						strokeWidth={0.05}
						transition={{ delay: 0, duration: 0.5 }}
					/>
				</svg>
			</motion.div>
		</div>
	);
};

export default ContactForm;
