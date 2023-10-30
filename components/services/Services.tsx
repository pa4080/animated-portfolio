"use client";

import React from "react";
import { Variants, motion } from "framer-motion";
import Image from "next/image";

import messages from "@/messages/en.json";
import people_image from "@/public/images/people_x300.webp";

import { cn } from "@/lib/cn-utils";

import styles from "./_services.module.scss";

interface Props {
	className?: string;
}

const Services: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(styles.services, className)}>
			<motion.div className={styles.textContainer}>
				<p dangerouslySetInnerHTML={{ __html: messages.Services.slogan }} />
				<hr />
			</motion.div>
			<motion.div className={styles.titleContainer}>
				<h1>
					<span className={styles.image}>
						<Image alt={messages.Services.titleImageAlt} src={people_image} />
					</span>
					<span dangerouslySetInnerHTML={{ __html: messages.Services.title_ln1 }}></span>
				</h1>
				<h1>
					<span dangerouslySetInnerHTML={{ __html: messages.Services.title_ln2 }}></span>{" "}
					<button>{messages.Services.title}</button>
				</h1>
			</motion.div>
			<motion.div className={styles.listContainer}>
				{[1, 2, 3, 4].map((i) => (
					<div key={i} className={styles.listItem}>
						<h2>Title</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quidem alias modi magnam,
							esse, sit magni asperiores, nisi provident animi possimus omnis eveniet officiis eos
							ducimus natus ipsum quibusdam quae!
						</p>
						<button>Go</button>
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default Services;
