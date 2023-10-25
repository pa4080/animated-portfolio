import React from "react";

import { cn } from "@/lib/cn-utils";

import styles from "./_hero.module.scss";

interface Props {
	className?: string;
}

const Hero: React.FC<Props> = ({ className }) => {
	return <div className={cn(styles.hero, className)}>Hero</div>;
};

export default Hero;
