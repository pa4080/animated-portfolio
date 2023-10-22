/**
 * @see https://youtu.be/CHGHuF24Cjw?si=EC11owwvJy_FCMsI&t=941
 */
"use client";

import React from "react";
import { Variants, motion } from "framer-motion";

const Page: React.FC = () => {
	const variants: Variants = {
		visible: { opacity: 1, scale: 1 },
		hidden: { opacity: 0, scale: 0.5 },
	};

	const component = (
		<div className="course">
			<motion.div
				animate="visible"
				className="box"
				initial="hidden"
				transition={{ duration: 2 }}
				variants={variants}
			></motion.div>
		</div>
	);

	return <>{component}</>;
};

export default Page;
