import { store } from "./store.ts";

export type TRootState = ReturnType<typeof store.getState>;

export type TDispatch = typeof store.dispatch;