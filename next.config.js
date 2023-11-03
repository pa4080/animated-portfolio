/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "githubusercontent.com",
				port: "",
				pathname: "*/**",
			},
			{
				protocol: "https",
				hostname: "raw.githubusercontent.com",
				port: "",
				pathname: "*/**",
			},
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "media.licdn.com",
				port: "",
				pathname: "/**",
			},
		],
	},
	async headers() {
		return [
			{
				source: "/:all*(svg|jpg|png|webp|webm|mkv|avi|mp4|eot|svg|ttf|woff|woff2)",
				locale: false,
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=604800, s-maxage=604800, must-revalidate",
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
