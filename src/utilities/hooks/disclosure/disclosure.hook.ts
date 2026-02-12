import { useCallback, useState } from "react";
import { IDisclosureHookActions, IDisclosureHookOptions } from "./disclosure.hook.interface.ts";

export const useDisclosure = (
	initialState: boolean,
	options: IDisclosureHookOptions = {}
): [boolean, IDisclosureHookActions] => {
	const [isDisclosed, setIsDisclosed] = useState(initialState);

	const open = useCallback(() => setIsDisclosed(isPreviouslyDisclosed => {
		if (!isPreviouslyDisclosed) {
			options.onOpen?.();
		}

		return true;
	}), [options]);

	const close = useCallback(() => setIsDisclosed(isPreviouslyDisclosed => {
		if (isPreviouslyDisclosed) {
			options.onClose?.();
		}

		return false;
	}), [options]);

	const toggle = useCallback(
		() => !isDisclosed ? open() : close(),
		[isDisclosed, open, close]
	);

	return [
		isDisclosed,
		{ open, close, toggle }
	];
};