import { Breakpoint } from "@constants/breakpoint.enum.ts";
import { useState } from "react";
import { IBreakpoint } from "./breakpoint.hook.interface.ts";

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

let index = breakpoints.length - 1;

export const useBreakpoint = () => {
	const [breakpoint, setBreakpoint] = useState(Breakpoint.Large);

	const resizeObserver = new ResizeObserver(([entry]) => {
		const width = entry.contentRect.width;
		
		if (
			index > 0 && 
			width < breakpoints[index].width
		) {
			index--;
		} else if (
			index < breakpoints.length - 1 && 
			width >= breakpoints[index + 1].width
		) {
			index++;
		}

		if (breakpoint !== breakpoints[index].key) {
			setBreakpoint(breakpoints[index].key);
		}
	});

	resizeObserver.observe(document.body);

	return breakpoint;
};