import React from "react";

import Navbar from "@/components/navbar/Navbar";

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
			</section>
			<section id="Services">Services</section>
			<section id="Portfolio">Portfolio</section>
			<section id="Contact">Contact</section>
			<section id="About">About</section>
		</main>
	);
};

export default Home;
