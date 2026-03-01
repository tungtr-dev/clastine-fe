import { TRootState, TDispatch } from "@domain/store";
import { useDispatch, useSelector } from "react-redux";

export const useAppSelector = useSelector.withTypes<TRootState>();
export const useAppDispatch = useDispatch.withTypes<TDispatch>();