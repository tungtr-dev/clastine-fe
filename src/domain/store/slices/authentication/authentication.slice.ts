import { createSlice } from "@reduxjs/toolkit";
import { authenticationThunk } from "@domain/store/thunks";
import { IAuthenticationState } from "./authentication.slice.interface.ts";
import { SliceID } from "../slice.id.enum.ts";

export const authenticationSlice = createSlice({
	name: SliceID.Authentication,
	initialState: {
		email: "",
		displayName: "",
		token: ""
	} as IAuthenticationState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(authenticationThunk.register.fulfilled, (state, { payload }) => {
				state.email = payload.email;
				state.displayName = payload.displayName;
				state.token = payload.token;
			})
			.addCase(authenticationThunk.register.rejected, (_, { payload }) => {
				console.log(payload);
			})
	},
});

export const authenticationReducer = authenticationSlice.reducer;

export const authenticationActions = authenticationSlice.actions;