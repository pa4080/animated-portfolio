"use client";
import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/cn-utils";
import mountains from "@/public/assets/parallax/dark/mountains.webp";
import planets from "@/public/assets/parallax/dark/planets.webp";
import sun from "@/public/assets/parallax/dark/sun.webp";

import styles from "./_parallax.module.scss";

export type ParallaxSectionType = "services" | "portfolio";

interface Props {
	type: ParallaxSectionType;
	className?: string;
	children?: ReactNode;
}

const Parallax: React.FC<Props> = ({ className, type, children }) => {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	const yText = useTransform(scrollYProgress, [0, 1], ["-20%", "450%"]);
	const yPlanets = useTransform(scrollYProgress, [0, 1], ["-10%", "50%"]);
	const xStars = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

	return (
		<div ref={containerRef} className={cn(styles.parallax, className)}>
			<motion.div className={styles.textBox} style={{ y: yText }}>
				<motion.h1>{type === "services" ? "What We do?" : "What We Did"}</motion.h1>
				{children}
			</motion.div>
			<motion.div className={styles.stars} style={{ x: xStars }}>
				<div aria-label="Parallax background image" className={styles.imageAsBackground} />
			</motion.div>
			<motion.div className={styles.planets} style={{ y: yPlanets }}>
				{type === "services" ? (
					<Image alt="Parallax background image" className={styles.image} src={planets} />
				) : (
					<Image alt="Parallax background image" className={styles.image} src={sun} />
				)}
			</motion.div>
			<motion.div className={styles.mountains}>
				<Image alt="Parallax background image" className={styles.image} src={mountains} />
			</motion.div>
		</div>
	);
};

export default Parallax;
