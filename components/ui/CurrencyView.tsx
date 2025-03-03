import { StyleSheet, ViewStyle } from "react-native";
import { ThemedView } from "../ThemedView";
import { ReactElement, ReactNode } from "react";
import { Themes } from "@/constants/Theme";
import { DollarIcon, LogoIcon } from "../icons";

interface CurrencyViewProps {
  size: number;
  currency: string;
}

export const CurrencyView = ({ currency, size }: CurrencyViewProps) => {
  const style: ViewStyle =
    currency === "coin"
      ? {
          backgroundColor: Themes.coin.primaryColor,
          borderColor: Themes.coin.primaryMediumColor,
          shadowColor: Themes.coin.primaryDeepColor,
        }
      : {
          backgroundColor: Themes.cash.primaryColor,
          borderColor: Themes.cash.primaryMediumColor,
          shadowColor: Themes.cash.primaryDeepColor,
        };

  const icon: ReactElement =
    currency === "coin" ? <LogoIcon /> : <DollarIcon />;

  return (
    <ThemedView
      style={[
        styles.logoBox,
        {
          width: size * 1.2,
          height: size * 1.2,
        },
        style,
      ]}
    >
      {icon}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  logoBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 3,
    elevation: 10,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    color: "white",
  },
});
