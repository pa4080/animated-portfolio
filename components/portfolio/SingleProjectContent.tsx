"use client";

import React from "react";
import { FaGithubAlt, FaExternalLinkSquareAlt } from "react-icons/fa";

import messages from "@/messages/en.json";

import styles from "./_portfolio.module.scss";

interface Props {
	name: string;
	description: string;
	link: string | null;
	project: string | null;
}
const SingleProjectContent: React.FC<Props> = ({ name, description, link, project }) => (
	<>
		<h1>{name}</h1>
		<div className={styles.description}>
			<p>{description}</p>
		</div>
		<div className={styles.buttons}>
			{project ? (
				<div>
					<a href={project} referrerPolicy="no-referrer" target="_blank">
						<p className={styles.btnText}>{messages.Portfolio.viewRepo}</p>
						<div className={styles.btnIcon}>
							<FaGithubAlt />
						</div>
					</a>
				</div>
			) : (
				<div></div>
			)}
			{link ? (
				<div>
					<a href={link} referrerPolicy="no-referrer" target="_blank">
						<p className={styles.btnText}>{messages.Portfolio.viewProject}</p>
						<div className={styles.btnIcon}>
							<FaExternalLinkSquareAlt />
						</div>
					</a>
				</div>
			) : (
				<div></div>
			)}
		</div>
	</>
);

export default SingleProjectContent;
