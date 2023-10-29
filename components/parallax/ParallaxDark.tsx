"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/cn-utils";

import styles from "./_parallax.module.scss";
import { ParallaxProps } from "./Parallax";

const ParallaxDark: React.FC<ParallaxProps> = ({ className, type, children, title }) => {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	const yText = useTransform(scrollYProgress, [0, 1], ["-20%", "450%"]);
	const yPlanets = useTransform(scrollYProgress, [0, 1], ["-10%", "50%"]);
	const xStars = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

	return (
		<div ref={containerRef} className={styles.parallax}>
			<motion.div className={`${styles.textBox} ${styles.textBoxDark}`} style={{ y: yText }}>
				<motion.h1>{title}</motion.h1>
				<div className={cn(className)}>{children}</div>
			</motion.div>
			<motion.div className={styles.stars} style={{ x: xStars }}>
				<div aria-label="Parallax background image" className={styles.imageAsBackground} />
			</motion.div>
			{type === "services" ? (
				<motion.div className={styles.planets} style={{ y: yPlanets }}>
					<div aria-label="Parallax background image" className={styles.imageAsBackground} />
				</motion.div>
			) : (
				<motion.div className={styles.sun} style={{ y: yPlanets }}>
					<div aria-label="Parallax background image" className={styles.imageAsBackground} />
				</motion.div>
			)}
			<motion.div className={styles.mountains}>
				<div aria-label="Parallax background image" className={styles.imageAsBackground} />
			</motion.div>
		</div>
	);
};

export default ParallaxDark;
