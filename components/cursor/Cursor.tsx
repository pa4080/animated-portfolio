"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/cn-utils";

import { useBreakpoint } from "@/hooks/useBreakpoint";

import styles from "./_cursor.module.scss";

interface Props {
	className?: string;
}

const Cursor: React.FC<Props> = ({ className }) => {
	const { isAboveMd } = useBreakpoint("md");
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setPosition({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		isAboveMd && (
			<motion.div
				animate={{
					x: position.x,
					y: position.y,
					transition: { duration: 0.2, ease: "easeOut" },
				}}
				className={cn(styles.cursor, className)}
			/>
		)
	);
};

export default Cursor;
