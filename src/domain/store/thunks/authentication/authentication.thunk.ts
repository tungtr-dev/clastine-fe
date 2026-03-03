import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticationService } from "@domain/services";
import { IAuthenticationThunk } from "./authentication.thunk.interface.ts";
import { AuthenticationThunkAction, AuthenticationThunkRejectReason } from "./authentication.thunk.enum.ts";
import { IRegisterPayloadDTO, ISignInPayloadDTO } from "@domain/dtos";

const createAuthenticationAsyncThunk = createAsyncThunk.withTypes<IAuthenticationThunk>();

export const authenticationThunk = {
	register: createAuthenticationAsyncThunk(
		AuthenticationThunkAction.Register,
		async (request: IRegisterPayloadDTO, thunk) => {
			try {
				return await authenticationService.register(request);
			} catch {
				return thunk.rejectWithValue(AuthenticationThunkRejectReason.UserExists);
			}
		}
	),
	signIn: createAuthenticationAsyncThunk(
		AuthenticationThunkAction.SignIn,
		async (request: ISignInPayloadDTO, thunk) => {
			try {
				return await authenticationService.signIn(request);
			} catch {
				return thunk.rejectWithValue(AuthenticationThunkRejectReason.SignInFailed);
			}
		}
	)
};