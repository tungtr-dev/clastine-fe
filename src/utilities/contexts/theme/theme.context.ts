import { Theme } from "@constants";
import { createContext } from "react";

export const ThemeContext = createContext<Theme>(Theme.Light);