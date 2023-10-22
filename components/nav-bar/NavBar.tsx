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
		<>
			<div className={cn("flex items-center justify-between p-2", styles.navBar, className)}>
				<Nav_Logo />

				<div className="flex items-center justify-end gap-4">
					<SocialLinks />

					<ThemeSelector />
				</div>
			</div>
		</>
	);
};

export default NavBar;
