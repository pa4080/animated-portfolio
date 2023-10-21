"use client";

import React, { createContext, useContext } from "react";

import messages from "@/messages/en.json";

interface AppContextProps {
	messages: typeof messages;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

interface AppContextProviderProps {
	children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
	return (
		<AppContext.Provider
			value={{
				messages,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
