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
		<div className={cn("drop-shadow-xl fixed bottom-2 w-full", className)}>
			<div className={cn("w-full mx-auto flex items-center justify-end")}>
				<div
					className={cn(
						"group drop-shadow-lg p-2 cursor-pointer transition-transform duration-300",
						show ? "" : "translate-y-24"
					)}
					onClick={onClick}
				>
					<div className="btn_ui_div text-foreground bg-slate-300 dark:bg-slate-700 group-hover:bg-accent dark:group-hover:text-background group-hover:text-background transition-colors duration-300">
						<ChevronUp />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScrollToTop;
