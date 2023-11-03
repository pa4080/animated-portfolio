"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import messages from "@/messages/en.json";
import { cn } from "@/lib/cn-utils";

import styles from "./_portfolio.module.scss";
import SingleProject from "./SingleProject";

interface Props {
	className?: string;
}

const Portfolio: React.FC<Props> = ({ className }) => {
	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["end end", "start start"],
	});

	const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

	const projects = messages.Portfolio.items;

	return (
		<div ref={containerRef} className={cn(styles.portfolio, className)} id="Portfolio_projects">
			<div className={styles.progress}>
				<h1 className={styles.progressTitle}>{messages.Portfolio.featured}</h1>
				<motion.div className={styles.progressBar} style={{ scaleX }} />
			</div>
			{projects.map(SingleProject)}
		</div>
	);
};

export default Portfolio;
