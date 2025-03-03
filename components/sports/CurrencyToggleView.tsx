import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Wrapper } from "../Wrapper";
import { ThemedText } from "../ThemedText";
import { CurrencyView, Switch } from "../ui";
import { DimensionValue } from "react-native";
import { useBetSlipTheme } from "@/hooks/useBetSlipTheme";
import { Themes } from "@/constants/Theme";
import { useCurrencyExchange } from "@/hooks/useCurrencyExchange";
import { currencyFormat } from "@/utils/functions";

interface CurrencyToggleViewProps {
  width?: DimensionValue;
  height?: DimensionValue;
  fontSize?: number;
  paddingVertical?: number;
  amount: number;
}

export const CurrencyToggleView = ({
  width = "100%",
  height = 60,
  fontSize = 24,
  paddingVertical = 12,
  amount = 0,
}: CurrencyToggleViewProps) => {
  const { theme, switchTheme } = useBetSlipTheme();

  const [isStimiCurrency, toggleStimiCurrency] = useState(false);

  useEffect(() => {
    toggleStimiCurrency(theme.name === "cash");
  }, [theme.name]);

  const handleToggleCurrency = (value: boolean) => {
    switchTheme(value ? "cash" : "coin");
    toggleStimiCurrency(value);
  };

  return (
    <LinearGradient
      colors={[theme.primaryGradientStartColor, theme.primaryGradientEndColor]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.stimiCurrencyToggle, { width, paddingVertical }]}
    >
      <Wrapper style={styles.flexBar}>
        <CurrencyView size={fontSize} currency={theme.name} />
        <ThemedText style={[styles.amountText, { fontSize }]}>
          {currencyFormat(
            amount,
            theme.name,
            useCurrencyExchange().exchangeRate
          )}
        </ThemedText>
        <Switch
          value={isStimiCurrency}
          onChange={(value) => handleToggleCurrency(value)}
          inActiveColor={Themes.coin.primaryColor}
          activeColor={Themes.cash.primaryColor}
        />
      </Wrapper>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  stimiCurrencyToggle: {
    width: "100%",
  },
  flexBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 0,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  amountText: {
    flex: 1,
    marginLeft: 8,
    fontFamily: "Joyride",
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 28.63,
    letterSpacing: 0,
  },
});
