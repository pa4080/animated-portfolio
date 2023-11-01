import React from "react";
import dynamic from "next/dynamic";

const ServicesCore = dynamic(() => import("./ServicesCore"), {
	ssr: false,
});

interface Props {
	className?: string;
}

const Services: React.FC<Props> = ({ className }) => {
	return <ServicesCore className={className} />;
};

export default Services;
