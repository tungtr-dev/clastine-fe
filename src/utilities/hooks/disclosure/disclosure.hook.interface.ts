export interface IDisclosureHookActions {
	open: () => void;
	close: () => void;
	toggle: () => void;
}

export interface IDisclosureHookOptions {
	onOpen?: () => void;
	onClose?: () => void;
}