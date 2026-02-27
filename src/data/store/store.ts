import { configureStore } from "@reduxjs/toolkit";
import { breakpointReducer, modalReducer } from "@store/slices";

export const store = configureStore({
	reducer: {
		breakpoint: breakpointReducer,
		modal: modalReducer
	}
});