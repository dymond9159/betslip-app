import { useContext } from "react";
import { ThemeContext } from "@/provider/themeContext";

export const useBetSlipTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
