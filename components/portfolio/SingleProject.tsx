"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import messages from "@/messages/en.json";

import { useBreakpoint } from "@/hooks/useBreakpoint";

import styles from "./_portfolio.module.scss";
import SingleProjectContent from "./SingleProjectContent";

const SingleProject: React.FC<(typeof messages.Portfolio.items)[number]> = ({
	id,
	name,
	description,
	image,
	link,
	project,
}) => {
	const { isAboveLg } = useBreakpoint("lg");
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
	});

	const yLg = useTransform(scrollYProgress, [0, 1], [-500, 500]);
	const y = useTransform(scrollYProgress, [0, 1], [-76, 310]);

	return (
		<section key={id} className={styles.projectSection}>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<div className={styles.projectSectionWrapper}>
				<div ref={ref} className={styles.image}>
					<Image alt={name} height={315} src={image} width={580} />
				</div>
				{isAboveLg ? (
					<motion.div className={styles.textContainer} style={{ y: yLg }}>
						<SingleProjectContent
							description={description}
							link={link}
							name={name}
							project={project}
						/>
					</motion.div>
				) : (
					<motion.div className={styles.textContainer} style={{ y }}>
						<SingleProjectContent
							description={description}
							link={link}
							name={name}
							project={project}
						/>
					</motion.div>
				)}
			</div>
		</section>
	);
};

export default SingleProject;
