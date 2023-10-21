/**
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/fonts
 */
import localFont from "next/font/local";
import { Inter, Roboto_Slab } from "next/font/google";

export const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const roboto_slab = Roboto_Slab({
	subsets: ["latin"],
	weight: ["500", "700"], // ["100", ..., "900"]
	style: ["normal"], // italic
	display: "swap",
	variable: "--font-roboto-slab",
});

export const unicephalon = localFont({
	src: [
		{
			path: "../public/fonts/disaster-fonts/unicephalon.heavy.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/disaster-fonts/unicephalon.heavy.ttf",
			weight: "400",
			style: "normal",
		},
	],
	display: "swap",
	variable: "--font-unicephalon",
});
