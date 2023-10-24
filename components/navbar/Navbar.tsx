import React from "react";

import { cn } from "@/lib/cn-utils";

import styles from "./_navbar.module.scss";
import Nav_Logo from "./Logo";

import ThemeSelector from "../theme-selector/ThemeSelector";
import SocialLinks from "./SocialLinks";

interface Props {
	className?: string;
}

const Navbar: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(styles.Navbar, className)}>
			{/* <Sidebar /> */}
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

export default Navbar;
