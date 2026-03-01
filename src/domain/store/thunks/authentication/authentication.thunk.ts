import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticationService, IAuthenticationRegisterRequest } from "@domain/services";
import { IAuthenticationThunk } from "./authentication.thunk.interface.ts";
import { AuthenticationThunkAction, AuthenticationThunkRejectReason } from "./authentication.thunk.enum.ts";

const createAuthenticationAsyncThunk = createAsyncThunk.withTypes<IAuthenticationThunk>();

export const authenticationThunk = {
	register: createAuthenticationAsyncThunk(
		AuthenticationThunkAction.Register,
		async (request: IAuthenticationRegisterRequest, thunk) => {
			try {
				return await authenticationService.register(request);
			} catch {
				return thunk.rejectWithValue(AuthenticationThunkRejectReason.UserExists);
			}
		}
	)
};