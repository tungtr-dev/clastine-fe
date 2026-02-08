import { TRootState, TDispatch } from "data/store/index.ts";
import { useDispatch, useSelector } from "react-redux";

export const useAppSelector = useSelector.withTypes<TRootState>();
export const useAppDispatch = useDispatch.withTypes<TDispatch>();