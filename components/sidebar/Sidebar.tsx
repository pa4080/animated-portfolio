"use client";
import React, { useState } from "react";

import { Variants, motion } from "framer-motion";

import { cn } from "@/lib/cn-utils";

import { useActualVh } from "@/hooks/useActualVh";

import styles from "./_sidebar.module.scss";
import Links from "./Links";
import ToggleButton from "./ToggleButton";
import ScrollToTop from "./ScrollToTop";

interface Props {
	className?: string;
}

const variants: Variants = {
	open: {
		clipPath: "circle(1200px at 50px 50px)",
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 40,
			damping: 10,
			delay: 0.4,
		},
	},
	closed: {
		clipPath: "circle(20px at 48px 48px)",
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 40,
			delay: 0.2,
		},
	},
	initial: { opacity: 0 },
};

const Sidebar: React.FC<Props> = ({ className }) => {
	const [open, setOpen] = useState(false);

	const { show, scrollTo } = useActualVh();

	return (
		// This animation will be applied to all children,
		// so when it is "open" the children will choose the variant "open"
		// and when it is "closed" the children will choose the variant "closed"
		<motion.div animate={open ? "open" : "closed"} className={cn(styles.sidebar, className)}>
			<motion.div
				className={cn(
					styles.wrapper,
					"transition-colors duration-1000 data-[state=open]:bg-foreground",
					"data-[state=closed]:bg-orange-100 dark:data-[state=closed]:bg-violet-200"
				)}
				data-state={open ? "open" : "closed"}
				initial={variants.initial as {}}
				variants={variants}
			>
				<Links className={styles.links} />
			</motion.div>
			<ToggleButton className={styles.toggleButton} onClick={() => setOpen((prev) => !prev)} />
			<ScrollToTop show={show} onClick={scrollTo} />
		</motion.div>
	);
};

export default Sidebar;
