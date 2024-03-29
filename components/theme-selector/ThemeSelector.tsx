import React, { CSSProperties } from "react";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";

import { SunMoon } from "lucide-react";

import { ThemeMode, ThemeType } from "./ThemeSelectorCore";

const ThemeSelectorCore = dynamic(() => import("./ThemeSelectorCore"), {
	ssr: false,
	loading: () => (
		<div className="btn_ui_div btn_ui_div_colors relative w-10 h-10 max-h-full">
			<SunMoon />
		</div>
	),
});

interface Props {
	className?: string;
	style?: CSSProperties;
}

const ThemeSelector: React.FC<Props> = ({ className, style }) => {
	const theme = cookies().get("x-theme")?.value as ThemeType;
	const mode = cookies().get("x-theme-mode")?.value as ThemeMode;

	return (
		<div className={className} style={style}>
			<ThemeSelectorCore mode={mode} theme={theme} />
		</div>
	);
};

export default ThemeSelector;
