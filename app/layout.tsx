import React from "react";
// import { Analytics } from "@vercel/analytics/react";
import { cookies } from "next/headers";

import "./globals.scss";

import Link from "next/link";

import { RiArrowGoBackFill } from "react-icons/ri";

import { inter, roboto_slab, unicephalon, dm_sans } from "@/app/fonts";
import manifest from "@/public/manifest.json";
import { AppContextProvider } from "@/contexts/AppContext";

import ThemeSelector from "@/components/theme-selector/ThemeSelector";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: manifest.name,
	description: manifest.description,
	manifest: "/manifest.json",
	viewport: "width=device-width, initial-scale=1",
	robots: "index,follow",
	keywords: manifest.keywords,
	themeColor: manifest.theme_color,
	publisher: manifest.author,
	creator: manifest.author,
	colorScheme: "light",
	icons: "/favicon.svg",
};

interface Props {
	children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
	const switchTheme = () => {
		switch (cookies().get("x-theme")?.value) {
			case "light":
				return "light";

			case "dark":
				return "dark";

			default:
				return "system";
		}
	};

	return (
		<html suppressHydrationWarning className={switchTheme()} lang="en">
			<body
				className={
					`${dm_sans.className} + ${dm_sans.variable} ` +
					`${inter.variable} ${roboto_slab.variable} ${unicephalon.variable} `
				}
			>
				<div className="h-full">
					<div className="sticky top-0">
						<div className="absolute top-8 right-8 z-1 flex gap-4">
							<ThemeSelector className="opacity-0 animate-fadeIn" />

							<Link className="text-inherit hover:text-inherit" href="/">
								<div className="rounded-md bg-slate-600 p-2 hover:invert text-2xl">
									<RiArrowGoBackFill />
								</div>
							</Link>
						</div>
					</div>
					<AppContextProvider>{children}</AppContextProvider>
					{/* <Analytics /> */}
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
