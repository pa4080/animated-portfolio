import React from "react";

// import ThemeSelector from "@/components/theme-selector/ThemeSelector";

/**
 * Refs. about the grid layout
 * @see https://tailwindcss.com/docs/grid-template-columns
 * @see https://refine.dev/blog/tailwind-grid/
 * @see https://stackoverflow.com/questions/66556514/tailwind-grid-template-columns
 */
const Home: React.FC = () => {
	return (
		<div>
			<section className="font text-3xl">
				<p className="font-unicephalon">Hero</p>
				<p className="font-robotoSlab">Hero</p>
				<p className="font-dmSans">Hero</p>
				<p className="font-inter">Hero</p>
				<p>Hero</p>
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
