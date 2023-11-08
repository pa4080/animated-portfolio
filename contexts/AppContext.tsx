"use client";

import React, { createContext, useContext, useState } from "react";

import messages from "@/messages/en.json";
import { ThemeType } from "@/components/theme-selector/ThemeSelectorCore";

const theme: ThemeType = "system";

interface AppContextProps {
	messages: typeof messages;
	theme?: ThemeType;
	fancyCursor: boolean;
	setFancyCursor: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

interface AppContextProviderProps {
	children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
	const [fancyCursor, setFancyCursor] = useState(false);

	return (
		<AppContext.Provider
			value={{
				messages,
				theme,
				fancyCursor,
				setFancyCursor,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
