import React from "react";

import { FaLinkedin, FaUbuntu, FaGithub } from "react-icons/fa";

import { cn } from "@/lib/cn-utils";

import styles from "./_nav-bar.module.scss";

interface Props {
	className?: string;
}

const SocialLinks: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(styles.socialLinks, className)}>
			<a href={process.env.ME_LINKED_IN} target="_blank">
				<FaLinkedin />
			</a>
			<a href={process.env.ME_ASK_UBUNTU} target="_blank">
				<FaUbuntu />
			</a>
			<a href={process.env.ME_GITHUB} target="_blank">
				<FaGithub />
			</a>
		</div>
	);
};

export default SocialLinks;
