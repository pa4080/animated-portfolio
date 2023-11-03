"use client";

import React, { useRef } from "react";
import { Variants, motion, useInView } from "framer-motion";
import Image from "next/image";

import Link from "next/link";

import messages from "@/messages/en.json";
import people_image from "@/public/images/people_x300.webp";

import { cn } from "@/lib/cn-utils";

import { arrayRandomItems } from "@/lib/array-random-items";

import styles from "./_services.module.scss";

const variants: Variants = {
	initial: {
		x: "-350px",
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
	margin?: string;
	randomCount?: number;
}

const ServicesCore: React.FC<Props> = ({ className, margin = "-100px", randomCount = 4 }) => {
	const containerRef = useRef(null);
	const isInView = useInView(containerRef, { margin });
	const services = messages.Services.items;
	const getRandomServices = arrayRandomItems({ items: services, count: randomCount });

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
				{getRandomServices.map((service) => (
					<div key={service.id} className={styles.listItem}>
						<h2 className={styles.listItemTitle}>{service.title}</h2>
						<div className={styles.listItemContent}>
							<p>{service.description}</p>
						</div>
						<Link href="#Contact">
							<div className={styles.listItemButton}>
								<button>{messages.Buttons.go}</button>
							</div>
						</Link>
					</div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default ServicesCore;
