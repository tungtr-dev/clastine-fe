import { configureStore } from "@reduxjs/toolkit";
import { breakpointReducer } from "./slices/breakpoint/breakpoint.slice.ts";
import { modalReducer } from "./slices/modal/modal.slice.ts";

export const store = configureStore({
	reducer: {
		breakpoint: breakpointReducer,
		modal: modalReducer
	}
});