"use client";

import React from "react";
import dynamic from "next/dynamic";

import { cn } from "@/lib/cn-utils";

const PortfolioCore = dynamic(() => import("./PortfolioCore"), {
	ssr: false,
});

interface Props {
	className?: string;
}

const Portfolio: React.FC<Props> = ({ className }) => (
	<PortfolioCore className={cn("", className)} />
);
export default Portfolio;
