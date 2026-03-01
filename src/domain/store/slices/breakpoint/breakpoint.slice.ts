import { Breakpoint } from "@constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SliceID } from "../slice.id.enum.ts";
import { IBreakpointState } from "./breakpoint.slice.interface.ts";
import { TRootState } from "@domain/store";

export const breakpointSlice = createSlice({
	name: SliceID.Breakpoint,
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