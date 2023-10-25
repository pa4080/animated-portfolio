/**
 * @see https://youtu.be/CHGHuF24Cjw?si=EC11owwvJy_FCMsI&t=941
 */
"use client";

import React from "react";
import { motion } from "framer-motion";

const Page: React.FC = () => {
	return (
		<div className="course">
			<motion.div
				className="box"
				initial={{ opacity: 0.5, scale: 0.5, rotate: 0 }}
				transition={{ duration: 2 }}
				whileTap={{ opacity: 1, scale: 1, rotate: 45 }} // click and hold on desktop
			></motion.div>
		</div>
	);
};

export default Page;
