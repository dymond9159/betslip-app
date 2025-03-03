import { Colors } from "./Colors";

// themes.ts

export const Themes = {
  coin: {
    name: "coin",
    ...Colors.coin,
  },
  cash: {
    name: "cash",
    ...Colors.cash,
  },
};

export type ThemeType = typeof Themes.coin;
