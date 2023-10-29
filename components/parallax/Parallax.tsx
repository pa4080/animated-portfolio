"use client";
import React, { ReactNode } from "react";

import { useAppContext } from "@/contexts/AppContext";

import ParallaxDark from "./ParallaxDark";
import ParallaxLight from "./ParallaxLight";

export type ParallaxSectionType = "services" | "portfolio";

export interface ParallaxProps {
	type: ParallaxSectionType;
	title?: string;
	className?: string;
	children?: ReactNode;
}

const Parallax: React.FC<ParallaxProps> = ({ className, type, children, title }) => {
	const { theme } = useAppContext();
	const composeTitle = title ? title : type === "services" ? "What We do?" : "What We Did";

	return theme === "dark" ? (
		<ParallaxDark className={className} title={composeTitle} type={type}>
			{children}
		</ParallaxDark>
	) : (
		<ParallaxLight className={className} title={composeTitle} type={type}>
			{children}
		</ParallaxLight>
	);
};

export default Parallax;
