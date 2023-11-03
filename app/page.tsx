import React from "react";

import Hero from "@/components/hero/Hero";

import Navbar from "@/components/navbar/Navbar";
import Parallax from "@/components/parallax/Parallax";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";

/**
 * Refs. about the grid layout
 * @see https://tailwindcss.com/docs/grid-template-columns
 * @see https://refine.dev/blog/tailwind-grid/
 * @see https://stackoverflow.com/questions/66556514/tailwind-grid-template-columns
 */
const Home: React.FC = () => {
	return (
		<main>
			{/* <div className="sticky top-6 w-full flex items-center justify-end pr-6"></div> */}
			<section id="Homepage">
				<Navbar />
				<Hero />
			</section>
			<section id="Services">
				<Parallax type="services" />
			</section>
			<section>
				<Services />
			</section>
			<section id="Portfolio">
				<Parallax type="portfolio" />
			</section>
			<Portfolio />
			<section id="Contact">Contact</section>
			<section id="About">About</section>
		</main>
	);
};

export default Home;
