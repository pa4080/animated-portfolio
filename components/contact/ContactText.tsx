"use client";

import React from "react";
import { Variants, motion } from "framer-motion";

import { cn } from "@/lib/cn-utils";

import styles from "./_contact.module.scss";

const variantsY: Variants = {
	initial: {
		y: 500,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.3,
			staggerChildren: 0.1,
		},
	},
};

const variantsX: Variants = {
	initial: {
		x: "100%",
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.1,
		},
	},
};

export interface TextItem {
	title: string;
	text: string;
}

interface Props {
	className?: string;
	textItems: TextItem[];
	title: string;
}

const ContactText: React.FC<Props> = ({ className, textItems, title }) => {
	return (
		<motion.div
			className={cn(styles.textContainer, className)}
			initial="initial"
			variants={variantsX}
			whileInView="animate"
		>
			<motion.h1 className={styles.title} variants={variantsY}>
				{title}
			</motion.h1>
			<div className={styles.data}>
				{textItems.map((item, index) => (
					<motion.div key={index} className={styles.dataItem} variants={variantsY}>
						<h2>{item.title}</h2>
						<p style={{ userSelect: "all" }}>{item.text}</p>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

export default ContactText;
