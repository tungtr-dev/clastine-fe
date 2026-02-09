export type { TRootState, TDispatch } from "./store.interface.ts";
export { store } from "./store.ts";

export { breakpointReducer, breakpointSlice, selectBreakpoint, breakpointActions } from "./slices/breakpoint.slice.ts";
export type { IBreakpointState } from "./slices/breakpoint.slice.interface.ts";