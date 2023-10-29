"use client";

import React, { createContext, useContext } from "react";

import messages from "@/messages/en.json";
import { ThemeType } from "@/components/theme-selector/ThemeSelectorCore";

interface AppContextProps {
	messages: typeof messages;
	theme?: ThemeType;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

interface AppContextProviderProps {
	children: React.ReactNode;
	theme?: ThemeType;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
	children,
	theme = "system",
}) => {
	return (
		<AppContext.Provider
			value={{
				messages,
				theme,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
