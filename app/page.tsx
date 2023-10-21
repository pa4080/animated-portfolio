import React from "react";

import ThemeSelector from "@/components/theme-selector/ThemeSelector";

/**
 * Refs. about the grid layout
 * @see https://tailwindcss.com/docs/grid-template-columns
 * @see https://refine.dev/blog/tailwind-grid/
 * @see https://stackoverflow.com/questions/66556514/tailwind-grid-template-columns
 */
const Home: React.FC = () => {
	return (
		// Most of these should be moved in the ./layout.tsx
		<main className="container p-2 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-2 lg:gap-4">
			<div className="lg:col-span-2 bg-purple-200">
				<ThemeSelector />
			</div>

			<div className="p-2 hidden lg:flex flex-col justify-between bg-green-200">left</div>
			<div className="bg-blue-200">main</div>
		</main>
	);
};

export default Home;
