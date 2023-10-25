/**
 * @see https://youtu.be/CHGHuF24Cjw?si=EC11owwvJy_FCMsI&t=941
 */
"use client";

import React, { useState } from "react";
import { Variants, motion } from "framer-motion";

const Page: React.FC = () => {
	const [open, setOpen] = useState(false);

	const variants: Variants = {
		visible: { opacity: 1, x: 200, transition: { type: "spring", stiffness: 200, damping: 5 } },
		hidden: { opacity: 0 },
	};

	const component = (
		<div className="course">
			<motion.div
				// animate="visible"
				// initial="hidden"
				animate={open ? "visible" : "hidden"}
				className="box"
				transition={{ duration: 2 }}
				variants={variants}
			></motion.div>
		</div>
	);

	return (
		<div className="flex flex-col justify-between h-full pb-36 overflow-hidden">
			<div></div>
			{component}
			<button
				className="rounded-md bg-slate-600 py-2 px-6 block w-fit text-lg mx-auto hover:invert font-semibold"
				onClick={() => setOpen((prev) => !prev)}
			>
				Click
			</button>
		</div>
	);
};

export default Page;
