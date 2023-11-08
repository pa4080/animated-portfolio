"use client";
import React, { useEffect, useRef, useState } from "react";

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
		clipPath: "circle(3200px at 48px 48px)",
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 40,
			damping: 10,
			delay: 0.4,
		},
	},
	closed: {
		clipPath: "circle(18px at 48px 48px)",
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
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		/**
		 * Close the menu when click outside
		 * https://stackoverflow.com/a/42234988/6543935
		 */
		function handleClickOutside(event: MouseEvent) {
			if (!ref.current) {
				return;
			}

			if (!ref.current.contains(event.target as Node)) {
				setOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);

	return (
		<motion.div
			ref={ref}
			animate={open ? "open" : "closed"}
			className={cn(styles.sidebar, className)}
		>
			{open && (
				<motion.div
					animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
					className={styles.background}
					initial={{ opacity: 0 }}
				/>
			)}
			<motion.div
				className={cn(styles.wrapper)}
				data-state={open ? "open" : "closed"}
				initial={variants.initial as {}}
				variants={variants}
			>
				<Links className={styles.links} onClick={() => setOpen(false)} />
			</motion.div>
			<ToggleButton className={styles.toggleButton} onClick={() => setOpen((prev) => !prev)} />

			<ScrollToTop show={show} onClick={scrollTo} />
		</motion.div>
	);
};

export default Sidebar;
