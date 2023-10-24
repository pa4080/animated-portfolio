import React from "react";

import { cn } from "@/lib/cn-utils";

import styles from "./_nav-bar.module.scss";
import Nav_Logo from "./Logo";

import ThemeSelector from "../theme-selector/ThemeSelector";
import SocialLinks from "./SocialLinks";

interface Props {
	className?: string;
}

const NavBar: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(styles.navBar, className)}>
			{/* Sidebar */}
			<div className={styles.wrapper}>
				<Nav_Logo />

				<div className="flex items-center justify-end gap-6">
					<SocialLinks />

					<ThemeSelector className="opacity-0 animate-fadeIn" />
				</div>
			</div>
		</div>
	);
};

export default NavBar;
