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
				animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 45 }}
				className="box"
				initial={{ opacity: 0, x: 0, y: 0, scale: 0.5, rotate: 0 }}
				transition={{ duration: 2, delay: 0.2 }}
			></motion.div>
		</div>
	);
};

export default Page;
