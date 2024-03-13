"use client";

import React from "react";
import { Variants, motion } from "framer-motion";

import { FaLinkedin, FaUbuntu, FaGithub } from "react-icons/fa";

import { cn } from "@/lib/cn-utils";

import styles from "./_navbar.module.scss";

interface Props {
	className?: string;
}

const SocialLinks: React.FC<Props> = ({ className }) => {
	const links = [
		{
			icon: <FaGithub />,
			href: process.env.NEXT_PUBLIC_ME_GITHUB,
		},
		{
			icon: <FaUbuntu />,
			href: process.env.NEXT_PUBLIC_ME_ASK_UBUNTU,
		},
		{
			icon: <FaLinkedin />,
			href: process.env.NEXT_PUBLIC_ME_LINKED_IN,
		},
	];

	const variants: Variants = {
		visible: (i) => ({
			opacity: 1,
			scale: 1,
			x: 0,
			transition: { delay: (5 - i) * 0.1, duration: 0.74 },
		}),
		hidden: (i) => ({ opacity: 0, scale: 0.5, x: 45 * (i + 1) }),
	};

	return (
		<motion.ul
			animate="visible"
			className={cn(styles.socialLinks, className)}
			initial="hidden"
			variants={variants}
		>
			{links.reverse().map((link, index) => (
				<motion.li key={index} custom={index} variants={variants}>
					<a href={link.href} referrerPolicy="no-referrer" target="_blank">
						{link.icon}
					</a>
				</motion.li>
			))}
		</motion.ul>
	);
};

export default SocialLinks;
