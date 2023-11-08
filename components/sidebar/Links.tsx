import React from "react";
import { Variants, motion } from "framer-motion";

import { cn } from "@/lib/cn-utils";
import { Switch } from "@/components/ui/switch";
import { useAppContext } from "@/contexts/AppContext";

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

interface Props {
	className?: string;
	onClick?: () => void;
}

const Links: React.FC<Props> = ({ className, onClick }) => {
	const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

	const { fancyCursor, setFancyCursor } = useAppContext();

	return (
		<motion.div className={cn("relative", className)} variants={variants}>
			<Switch
				checked={fancyCursor}
				className="absolute top-10 right-8 z-50"
				onCheckedChange={setFancyCursor}
			/>
			{items.map((item, index) => (
				<motion.div
					key={index}
					variants={itemVariants}
					whileHover={{ scale: 1.1, transition: { duration: 0.02 } }}
					whileTap={{ scale: 0.95, transition: { duration: 0.02 } }}
				>
					<a href={`#${item}`} onClick={onClick}>
						{item}
					</a>
				</motion.div>
			))}
		</motion.div>
	);
};

export default Links;
