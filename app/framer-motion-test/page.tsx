/**
 * @see https://youtu.be/CHGHuF24Cjw?si=EC11owwvJy_FCMsI&t=941
 */

"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Variants, motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

const FramerMotionTestPage: React.FC = () => {
	const pathname = usePathname();

	const demos = [
		{ name: "Box rotate", route: `box-rotate` },
		{ name: "Box hover", route: `box-hover` },
		{ name: "Box tap/click", route: `box-tap` },
		{ name: "Box drag (no border)", route: `box-drag` },
		{ name: "Box in view", route: `box-in-view` },
		{ name: "Box with variants", route: `box-with-variants` },
		{ name: "Box with variants and condition", route: `box-with-variants-and-condition` },
		{
			name: "Box with variants, condition and transition",
			route: `box-with-variants-condition-and-transition`,
		},
	];

	const variants: Variants = {
		visible: { opacity: 1, x: 2, transition: { staggerChildren: 0.2 } },
		hidden: { opacity: 0, x: -25 },
	};

	const variants_with_dynamics: Variants = {
		visible: (i) => ({ opacity: 1, x: 2, transition: { delay: i * 0.7 } }),
		hidden: { opacity: 0, x: -25 },
	};

	return (
		<div className="p-8 text-xl">
			<h1 className="text-2xl mb-2">Framer Motion Tests</h1>
			<motion.ul animate="visible" initial="hidden" variants={variants}>
				{demos.map((demo, index) => (
					<motion.li key={index} className="mt-2" variants={variants}>
						<Link
							className="flex gap-1 items-center hover:translate-x-2 transition-transform duration-300"
							href={`${pathname}/${demo.route}`}
						>
							<span className="text-sm">
								<FaChevronRight />
							</span>
							{demo.name}
						</Link>
					</motion.li>
				))}
			</motion.ul>

			<h1 className="text-2xl mb-2 mt-10">Framer Motion Tests with Dynamics</h1>
			<motion.ul animate="visible" initial="hidden" variants={variants_with_dynamics}>
				{demos.map((demo, index) => (
					<motion.li key={index} className="mt-2" custom={index} variants={variants_with_dynamics}>
						<Link
							className="flex gap-1 items-center hover:translate-x-2 transition-transform duration-300"
							href={`${pathname}/${demo.route}`}
						>
							<span className="text-sm">
								<FaChevronRight />
							</span>
							{demo.name}
						</Link>
					</motion.li>
				))}
			</motion.ul>
		</div>
	);
};

export default FramerMotionTestPage;
