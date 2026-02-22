export type { TRootState, TDispatch } from "./store.interface.ts";
export { store } from "./store.ts";

export { breakpointReducer, breakpointSlice, selectBreakpoint, breakpointActions } from "./slices/breakpoint/breakpoint.slice.ts";
export type { IBreakpointState } from "./slices/breakpoint/breakpoint.slice.interface.ts";

export { modalReducer, modalSlice, selectModal, modalActions } from "./slices/modal/modal.slice.ts";
export type { IModalState } from "./slices/modal/modal.slice.interface.ts";