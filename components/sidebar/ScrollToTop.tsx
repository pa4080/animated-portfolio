import React from "react";

import { ChevronUp } from "lucide-react";

import { cn } from "@/lib/cn-utils";

interface Props {
	className?: string;
	onClick: () => void;
	show: boolean;
}

const ScrollToTop: React.FC<Props> = ({ className, onClick, show }) => {
	return (
		<div className={cn("drop-shadow-xl fixed right-0 bottom-2", className)}>
			<div
				className={cn(
					"group drop-shadow-lg p-3 cursor-pointer transition-transform duration-300",
					show ? "" : "translate-y-24"
				)}
			>
				<div
					className="btn_ui_div text-background dark:text-foreground bg-accent/60 dark:bg-slate-700 group-hover:bg-accent dark:group-hover:text-background
					group-hover:text-foreground
					transition-colors duration-300"
					onClick={onClick}
				>
					<ChevronUp />
				</div>
			</div>
		</div>
	);
};

export default ScrollToTop;
