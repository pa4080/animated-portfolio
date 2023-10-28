"use client";

import React from "react";
import { Variants, motion } from "framer-motion";
import Image from "next/image";

import model_image from "@/public/images/model-squat.webp";
import scroll_image from "@/public/images/scroll.png";
import messages from "@/messages/en.json";
import manifest from "@/public/manifest.json";

import { cn } from "@/lib/cn-utils";

import styles from "./_hero.module.scss";

interface Props {
	className?: string;
}

const textVariants: Variants = {
	initial: {
		x: -1500,
		y: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.15,
		},
	},
	scrollButton: {
		opacity: 0,
		y: 15,
		transition: {
			delay: 1,
			duration: 1.5,
			repeat: Infinity,
			ease: "easeInOut",
		},
	},
};

const sliderVariants: Variants = {
	initial: {
		x: "75%",
	},
	animate: {
		x: "-1735%",
		transition: {
			repeat: Infinity,
			duration: 65,
			repeatDelay: 10,
		},
	},
};

const Hero: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(styles.hero, className)}>
			<motion.div
				animate="animate"
				className={styles.slidingTextContainer}
				initial="initial"
				variants={sliderVariants}
			>
				<span className="animate-fadeIn03 dark:animate-fadeIn25">{manifest.description}</span>
			</motion.div>

			<motion.div
				animate="animate"
				className={styles.wrapper}
				initial="initial"
				variants={textVariants}
			>
				<motion.div className={styles.textContainer} variants={textVariants}>
					<motion.div variants={textVariants}>
						<div className={styles.author}>{manifest.author}</div>
						<div className={styles.subtitle}>{messages.Hero.presents}</div>
					</motion.div>
					<motion.h1 className={styles.title} variants={textVariants}>
						{manifest.about}
					</motion.h1>
					<motion.div className={styles.buttons} variants={textVariants}>
						<motion.div variants={textVariants}>
							<button>{messages.Hero.latestProjects}</button>
						</motion.div>
						<motion.div variants={textVariants}>
							<button>{messages.Hero.contactMe}</button>
						</motion.div>
					</motion.div>
					<motion.div animate="scrollButton" variants={textVariants}>
						<Image
							alt={messages.Hero.scrollImageAlt}
							className={styles.scrollImage + " invert dark:invert-0"}
							src={scroll_image}
						/>
					</motion.div>
				</motion.div>
				<motion.div
					animate={{
						opacity: 1,
						x: 0,
						y: 0,
						scale: 1,
						transition: { delay: 0.3, duration: 0.7 },
					}}
					className={styles.modelImageContainer}
					initial={{ opacity: 0, x: "350%", y: "-150%", scale: 0.3 }}
					transition={{ duration: 1 }}
				>
					<Image priority alt={messages.Hero.modelImageAlt} src={model_image} />
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Hero;
