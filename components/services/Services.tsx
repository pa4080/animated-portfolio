"use client";

import React, { useRef } from "react";
import { Variants, motion, useInView } from "framer-motion";
import Image from "next/image";

import messages from "@/messages/en.json";
import people_image from "@/public/images/people_x300.webp";

import { cn } from "@/lib/cn-utils";

import styles from "./_services.module.scss";

const variants: Variants = {
	initial: {
		x: "-150px",
		y: "100px",
		opacity: 0,
	},
	animate: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};

interface Props {
	className?: string;
}

const Services: React.FC<Props> = ({ className }) => {
	const containerRef = useRef(null);
	const isInView = useInView(containerRef, { margin: "-100px" });

	return (
		<motion.div
			ref={containerRef}
			animate={isInView && "animate"}
			className={cn(styles.services, className)}
			initial="initial"
			variants={variants}
		>
			<motion.div className={styles.textContainer} variants={variants}>
				<p dangerouslySetInnerHTML={{ __html: messages.Services.slogan }} />
				<hr />
			</motion.div>
			<motion.div className={styles.titleContainer} variants={variants}>
				<div className={styles.titleContainerWrapper}>
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
				</div>
			</motion.div>
			<motion.div className={styles.listContainer} variants={variants}>
				{[1, 2, 3, 4].map((i) => (
					<div key={i} className={styles.listItem}>
						<h2 className={styles.listItemTitle}>Title</h2>
						<div className={styles.listItemContent}>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quidem alias modi
								magnam, esse, sit magni asperiores, nisi provident animi possimus omnis eveniet
								officiis eos ducimus natus ipsum quibusdam quae!
							</p>
						</div>
						<div className={styles.listItemButton}>
							<button>Go</button>
						</div>
					</div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Services;
