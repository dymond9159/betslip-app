import { useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Themes, ThemeType } from "../constants/Theme";
import { ThemeContext } from "./themeContext";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(Themes.coin);

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem("appTheme");
      if (savedTheme && (savedTheme === "coin" || savedTheme === "cash")) {
        setTheme(Themes[savedTheme]);
      } else {
        setTheme(Themes["coin"]);
      }
    };
    loadTheme();
  }, []);

  const switchTheme = async (newTheme: "coin" | "cash") => {
    setTheme(Themes[newTheme]);
    await AsyncStorage.setItem("appTheme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
