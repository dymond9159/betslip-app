import { ThemeType } from "@/constants/Theme";
import { createContext } from "react";

type ThemeContextType = {
  theme: ThemeType;
  switchTheme: (newTheme: "coin" | "cash") => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
