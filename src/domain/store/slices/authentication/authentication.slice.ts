import { createSlice } from "@reduxjs/toolkit";
import { authenticationThunk } from "@domain/store/thunks";
import { IAuthenticationState } from "./authentication.slice.interface.ts";
import { SliceID } from "../slice.id.enum.ts";
import { TRootState } from "domain/store/store.interface.ts";

const rawAccount = localStorage.getItem("account");

export const authenticationSlice = createSlice({
	name: SliceID.Authentication,
	initialState: rawAccount
		? JSON.parse(rawAccount) as IAuthenticationState
		: {
			email: "",
			displayName: "",
			token: ""
		},
	reducers: {
		signOut: state => {
			state.token = "";
			localStorage.removeItem("account");
		}
	},
	extraReducers(builder) {
		builder
			.addCase(authenticationThunk.signIn.fulfilled, (state, { payload }) => {
				state.email = payload.email;
				state.displayName = payload.displayName;
				state.token = payload.token;
				localStorage.setItem("account", JSON.stringify(state));
			})
	},
});

export const selectAccount = (state: TRootState) => state.authentication;

export const authenticationReducer = authenticationSlice.reducer;

export const authenticationActions = authenticationSlice.actions;