import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../Store";
import { useState } from "react";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useToggle = (initValue: boolean) => {
  const [value, setValue] = useState(initValue);
  const toggle = () => {
    setValue(!value);
  };
  return [value, toggle];
};
