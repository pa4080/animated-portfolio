import React from "react";

import NavBar from "@/components/nav-bar/NavBar";

/**
 * Refs. about the grid layout
 * @see https://tailwindcss.com/docs/grid-template-columns
 * @see https://refine.dev/blog/tailwind-grid/
 * @see https://stackoverflow.com/questions/66556514/tailwind-grid-template-columns
 */
const Home: React.FC = () => {
	return (
		<div>
			{/* <div className="sticky top-6 w-full flex items-center justify-end pr-6"></div> */}
			<section className="font text-3xl">
				<NavBar />
				<p className="font-unicephalon">Hero</p>
				<p className="font-robotoSlab">Hero</p>
				<p className="font-dmSans">Hero</p>
				<p className="font-inter">Hero</p>
				<p>Hero</p>
				<a href="#">Hero a</a>
			</section>
			<section>Parallax</section>
			<section>Services</section>
			<section>Parallax</section>
			<section>Portfolio1</section>
			<section>Portfolio2</section>
			<section>Portfolio3</section>
			<section>Contracts</section>
		</div>
	);
};

export default Home;
