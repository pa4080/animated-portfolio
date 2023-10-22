/**
 * @see https://youtu.be/CHGHuF24Cjw?si=EC11owwvJy_FCMsI&t=941
 */

"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const FramerMotionTestPage: React.FC = () => {
	const pathname = usePathname();

	const demos = [{ name: "Box", route: `box` }];

	return (
		<div className="p-8 text-xl">
			<ul>
				{demos.map((demo, index) => (
					<li key={index}>
						<Link href={`${pathname}/${demo.route}`}>{demo.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FramerMotionTestPage;
