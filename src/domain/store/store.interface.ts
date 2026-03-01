import { AsyncThunkConfig } from "@reduxjs/toolkit";
import { store } from "./store.ts";

export type TRootState = ReturnType<typeof store.getState>;

export type TDispatch = typeof store.dispatch;

export interface IThunk extends AsyncThunkConfig {
	state: TRootState;
	dispatch: TDispatch;
}