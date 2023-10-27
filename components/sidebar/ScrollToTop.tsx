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
		<div className={cn("drop-shadow-xl fixed right-9 bottom-1 w-full", className)}>
			<div className="w-full max-w-screen-1xl mx-auto flex items-center justify-end">
				<div
					className={cn(
						"group drop-shadow-lg p-6 mr-0 cursor-pointer transition-transform duration-300",
						show ? "" : "translate-y-24"
					)}
				>
					<div
						className="btn_ui_div text-foreground bg-slate-300 dark:bg-slate-700 group-hover:bg-accent dark:group-hover:text-background group-hover:text-background transition-colors duration-300"
						onClick={onClick}
					>
						<ChevronUp />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScrollToTop;
