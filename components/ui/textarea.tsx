import * as React from "react";

import { cn } from "@/lib/cn-utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		return (
			<textarea
				ref={ref}
				className={cn(
					"flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:border-accent disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-offset-background",
					className
				)}
				{...props}
			/>
		);
	}
);

Textarea.displayName = "Textarea";

export { Textarea };
