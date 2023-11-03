"use client";

import React from "react";
import dynamic from "next/dynamic";

import { useBreakpoint } from "@/hooks/useBreakpoint";
import { cn } from "@/lib/cn-utils";

const ServicesCore = dynamic(() => import("./ServicesCore"), {
	ssr: false,
});

interface Props {
	className?: string;
}

const Services: React.FC<Props> = ({ className }) => {
	const { isAboveSm } = useBreakpoint("sm");

	return isAboveSm ? (
		<ServicesCore className={cn("", className)} margin="-100px" randomCount={4} />
	) : (
		<ServicesCore className={cn("mb-12", className)} margin="0px" randomCount={999} />
	);
};

export default Services;
