import React, { createContext, useReducer } from "react";
import Reducer from './ReducerManager'

const initialState = {
	test: 100,
	currentBookData :{}
};

const GlobalStateManager = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);
	return (
		<StateContext.Provider value={[state, dispatch]}>
			{children}
		</StateContext.Provider>
	)
};

export const StateContext = createContext(initialState);
export default GlobalStateManager;