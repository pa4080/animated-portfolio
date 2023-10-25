import React from "react";
import { motion } from "framer-motion";

import cssVars from "@/app/globals.variables.module.scss";

import { cn } from "@/lib/cn-utils";

interface Props {
	className?: string;
	onClick: () => void;
}

const ToggleButton: React.FC<Props> = ({ className, onClick }) => {
	const { accent } = cssVars;

	return (
		<button className={cn("pt-1 drop-shadow-lg", className)} onClick={onClick}>
			<svg height="23" viewBox="0 0 23 23" width="23">
				<motion.path
					stroke={accent}
					strokeLinecap="round"
					strokeWidth="3"
					variants={{
						closed: { d: "M 2 2.5 L 20 2.5" },
						open: { d: "M 3 16.5 L 17 2.5" },
					}}
				/>
				<motion.path
					stroke={accent}
					strokeLinecap="round"
					strokeWidth="3"
					variants={{
						closed: { opacity: 1, d: "M 2 9.423 L 20 9.423" },
						open: { opacity: 0 },
					}}
				/>
				<motion.path
					stroke={accent}
					strokeLinecap="round"
					strokeWidth="3"
					variants={{
						closed: { d: "M 2 16.346 L 20 16.346" },
						open: { d: "M 3 2.5 L 17 16.346" },
					}}
				/>
			</svg>
		</button>
	);
};

export default ToggleButton;
