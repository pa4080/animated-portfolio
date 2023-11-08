import React from "react";

import Hero from "@/components/hero/Hero";

import Navbar from "@/components/navbar/Navbar";
import Parallax from "@/components/parallax/Parallax";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/contact/Contact";
import Cursor from "@/components/cursor/Cursor";
import About from "@/components/about/About";

/**
 * Refs. about the grid layout
 * @see https://tailwindcss.com/docs/grid-template-columns
 * @see https://refine.dev/blog/tailwind-grid/
 * @see https://stackoverflow.com/questions/66556514/tailwind-grid-template-columns
 */
const Home: React.FC = () => {
	return (
		<main>
			<Cursor />

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
			<section id="Contact">
				<Contact />
			</section>
			<section id="About">
				<About />
			</section>
		</main>
	);
};

export default Home;
