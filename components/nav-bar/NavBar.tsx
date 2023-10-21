import React from "react";

import { cn } from "@/lib/cn-utils";

import styles from "./navBar.module.scss";

import ThemeSelector from "../theme-selector/ThemeSelector";

interface Props {
	className?: string;
}

const NavBar: React.FC<Props> = ({ className }) => {
	return (
		<>
			<div className={cn("", styles.navBar, className)}>
				<ThemeSelector />
			</div>
		</>
	);
};

export default NavBar;
