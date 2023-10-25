import React from "react";
import { Variants, motion } from "framer-motion";

import { cn } from "@/lib/cn-utils";

interface Props {
	className?: string;
}

const variants: Variants = {
	open: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	closed: {
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
};

const itemVariants: Variants = {
	open: {
		y: 0,
		opacity: 1,
	},
	closed: {
		y: 50,
		opacity: 0,
	},
};

const Links: React.FC<Props> = ({ className }) => {
	const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

	return (
		<motion.div className={cn("", className)} variants={variants}>
			{items.map((item, index) => (
				<motion.div
					key={index}
					variants={itemVariants}
					whileHover={{ scale: 1.1, transition: { duration: 0.02 } }}
					whileTap={{ scale: 0.95, transition: { duration: 0.02 } }}
				>
					<a href={`#${item}`}>{item}</a>
				</motion.div>
			))}
		</motion.div>
	);
};

export default Links;
