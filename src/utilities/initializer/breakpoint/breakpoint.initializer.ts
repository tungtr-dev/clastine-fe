import { Breakpoint } from "@constants";
import { store, breakpointActions } from "@store";
import { IBreakpoint } from "./breakpoint.initializer.interface.ts";

export const initializeBreakpointObserver = () => {
	const breakpoints: IBreakpoint[] = [
		{
			key: Breakpoint.Small,
			width: 425
		},
		{
			key: Breakpoint.Medium,
			width: 768
		},
		{
			key: Breakpoint.Large,
			width: 1024
		}
	];

	let width: number,
		index = breakpoints.length - 1,
		newBreakpoint: Breakpoint,
		breakpoint: Breakpoint;

	const resizeObserver = new ResizeObserver(([entry]) => {
		width = entry.contentRect.width;

		if (
			index > 0
			&& width < breakpoints[index].width
		) {
			index--;
		} else if (
			index < breakpoints.length - 1
			&& width >= breakpoints[index + 1].width
		) {
			index++;
		}

		breakpoint = store.getState().breakpoint.value;

		newBreakpoint = breakpoints[index].key;

		if (breakpoint !== newBreakpoint) {
			store.dispatch(breakpointActions.changeTo(newBreakpoint))
		}
	});

	resizeObserver.observe(document.body);
};