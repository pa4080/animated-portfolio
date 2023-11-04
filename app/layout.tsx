import React from "react";
// import { Analytics } from "@vercel/analytics/react";
import { cookies } from "next/headers";

import { Toaster } from "@/components/ui/toaster";

import "./globals.scss";

import { inter, roboto_slab, unicephalon, dm_sans } from "@/app/fonts";
import manifest from "@/public/manifest.json";
import { AppContextProvider } from "@/contexts/AppContext";

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
	title: manifest.name,
	description: manifest.description,
	manifest: "/manifest.json",
	// viewport: "width=device-width, initial-scale=1",
	robots: "index,follow",
	keywords: manifest.keywords,
	publisher: manifest.author,
	creator: manifest.author,
	icons: "/favicon.svg",
};

export const viewport: Viewport = {
	themeColor: [
		{ color: manifest.theme_color, media: "(prefers-color-scheme: light)" },
		{ color: manifest.theme_color_dark, media: "(prefers-color-scheme: dark)" },
	],
	colorScheme: "light dark",
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
				<AppContextProvider theme={switchTheme()}>{children}</AppContextProvider>
				{/* <Analytics /> */}
				<Toaster />
			</body>
		</html>
	);
};

export default RootLayout;
