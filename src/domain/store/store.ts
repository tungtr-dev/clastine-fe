import { configureStore } from "@reduxjs/toolkit";
import { authenticationReducer, breakpointReducer, modalReducer } from "@domain/store/slices";

export const store = configureStore({
	reducer: {
		authentication: authenticationReducer,
		breakpoint: breakpointReducer,
		modal: modalReducer
	}
});