import { Breakpoint, SliceId } from "@constants";
import { IBreakpointState } from "./breakpoint.slice.interface.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TRootState } from "../store.interface.ts";

export const breakpointSlice = createSlice({
	name: SliceId.Breakpoint,
	initialState: {
		value: Breakpoint.Large
	} as IBreakpointState,
	reducers: {
		changeTo: (state, action: PayloadAction<Breakpoint>) => {
			state.value = action.payload;
		}
	}
});

export const selectBreakpoint = (state: TRootState) => state.breakpoint.value;

export const breakpointReducer = breakpointSlice.reducer;

export const breakpointActions = breakpointSlice.actions;