"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/cn-utils";

import styles from "./_parallax.module.scss";
import { ParallaxProps } from "./Parallax";

const ParallaxLight: React.FC<ParallaxProps> = ({ className, type, children, title }) => {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	const yText = useTransform(scrollYProgress, [0, 1], ["-20%", "450%"]);
	const xSkyA = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
	const xSkyB = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
	const xGroundA = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
	const xGroundB = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
	const yCity4 = useTransform(scrollYProgress, [0, 1], ["-4%", "50%"]);
	const yCity3 = useTransform(scrollYProgress, [0, 1], ["-2%", "35%"]);
	const yCity2 = useTransform(scrollYProgress, [0, 1], ["-1%", "25%"]);
	const yCity1 = useTransform(scrollYProgress, [0, 1], ["0", "30%"]);

	return (
		<div ref={containerRef} className={styles.parallax}>
			<motion.div className={`${styles.textBox} ${styles.textBoxLight}`} style={{ y: yText }}>
				<motion.h1>{title}</motion.h1>
				<div className={cn(className)}>{children}</div>
			</motion.div>
			<motion.div
				className={styles.orangeBackground}
				style={{
					background: `linear-gradient(${
						(styles.image, type === "services" ? 0 : 180)
					}deg, #e99435, #ffca89)`,
				}}
			/>
			{
				(styles.image,
				type === "services" ? (
					<>
						<motion.div className={styles.skyA} style={{ x: xSkyA }}>
							<div aria-label="Parallax background image" className={styles.imageAsBackground} />
						</motion.div>

						<motion.div className={styles.city4} style={{ y: yCity4, x: xGroundA }}>
							<div aria-label="Parallax background image" className={styles.imageAsBackground} />
						</motion.div>
						<motion.div className={styles.city3} style={{ y: yCity3, x: xGroundA }}>
							<div aria-label="Parallax background image" className={styles.imageAsBackground} />
						</motion.div>
						<motion.div className={styles.city2} style={{ y: yCity2, x: xGroundA }}>
							<div aria-label="Parallax background image" className={styles.imageAsBackground} />
						</motion.div>
						<motion.div className={styles.city1} style={{ y: yCity1, x: xGroundA }}>
							<div aria-label="Parallax background image" className={styles.imageAsBackground} />
						</motion.div>

						<motion.div className={styles.ground} style={{ x: xGroundA }}>
							<div aria-label="Parallax background image" className={styles.imageAsBackground} />
						</motion.div>
						<motion.div className={styles.trees} style={{ x: xGroundA }}>
							<div aria-label="Parallax background image" className={styles.imageAsBackground} />
						</motion.div>
					</>
				) : (
					<>
						<motion.div className={styles.skyB} style={{ x: xSkyB }}>
							<div aria-label="Parallax background image" className={styles.imageAsBackground} />
						</motion.div>

						<motion.div className={styles.city4} style={{ y: yCity4, x: xGroundA }}>
							<div aria-label="Parallax background image" className={styles.imageAsBackground} />
						</motion.div>
						<motion.div className={styles.city3} style={{ y: yCity3, x: xGroundA }}>
							<div aria-label="Parallax background image" className={styles.imageAsBackground} />
						</motion.div>
						<motion.div className={styles.city2} style={{ y: yCity2, x: xGroundA }}>
							<div aria-label="Parallax background image" className={styles.imageAsBackground} />
						</motion.div>
						<motion.div className={styles.city1} style={{ y: yCity1, x: xGroundA }}>
							<div aria-label="Parallax background image" className={styles.imageAsBackground} />
						</motion.div>

						<motion.div className={styles.ground} style={{ x: xGroundB }}>
							<div aria-label="Parallax background image" className={styles.imageAsBackground} />
						</motion.div>
						<motion.div className={styles.trees} style={{ x: xGroundB }}>
							<div aria-label="Parallax background image" className={styles.imageAsBackground} />
						</motion.div>
					</>
				))
			}
		</div>
	);
};

export default ParallaxLight;
