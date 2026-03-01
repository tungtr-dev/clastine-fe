import { IThunk } from "@domain/store";
import { AuthenticationThunkRejectReason } from "./authentication.thunk.enum.ts";

export interface IAuthenticationThunk extends IThunk {
	rejectValue: AuthenticationThunkRejectReason;
}