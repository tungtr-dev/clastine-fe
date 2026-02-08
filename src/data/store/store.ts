import { configureStore } from "@reduxjs/toolkit";
import { breakpointReducer } from "./slices/breakpoint.slice.ts";

export const store = configureStore({
	reducer: {
		breakpoint: breakpointReducer
	}
});