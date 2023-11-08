import React from "react";

import { remark } from "remark";
import html from "remark-html";

import { cn } from "@/lib/cn-utils";

import styles from "./_about.module.scss";

import path from "path";
import fs from "fs";

interface Props {
	className?: string;
}

const About: React.FC<Props> = async ({ className }) => {
	const content = fs.readFileSync(path.join(process.cwd(), "public/about-the-project.md"), "utf8");
	const processedContent = await remark().use(html).process(content);
	const contentHtml = processedContent
		.toString()
		.replace(/(<a href="https:\/\/.*")/g, "$1 target='_blank'");

	return (
		<div className={cn(styles.about, className)}>
			<div className={cn(styles.wrapper, className)}>
				<div dangerouslySetInnerHTML={{ __html: contentHtml }} className={styles.contentMd} />
				<div></div>
			</div>
		</div>
	);
};

export default About;
