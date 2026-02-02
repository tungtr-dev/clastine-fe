import { Theme } from "@constants/theme.enum.ts";
import { createContext } from "react";

export const ThemeContext = createContext<Theme>(Theme.Light);