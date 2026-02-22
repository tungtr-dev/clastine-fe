import { ModalID, SliceID } from "@constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModalSelector, IModalState } from "./modal.slice.interface.ts";
import { TRootState } from "data/store/store.interface.ts";

const ModalIDs: ModalID[] = [
	ModalID.Account
];

const initialState: Partial<IModalState> = {};

const selectors: Partial<IModalSelector> = {};

ModalIDs.forEach(id => {
	initialState[id] = false;

	Object.defineProperty(
		selectors,
		id,
		{ value: (state: TRootState) => state.modal[id] }
	)
});

export const modalSlice = createSlice({
	name: SliceID.Modal,
	initialState: initialState,
	reducers: {
		open: (state, action: PayloadAction<ModalID>) => {
			state[action.payload] = true;
		},
		close: (state, action: PayloadAction<ModalID>) => {
			state[action.payload] = false;
		}
	}
});

export const selectModal = (id: ModalID) => selectors[id];

export const modalReducer = modalSlice.reducer;

export const modalActions = modalSlice.actions;