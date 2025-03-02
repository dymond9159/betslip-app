import { useState } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Wrapper } from "../Wrapper";
import { ThemedView } from "../ThemedView";
import { LogoIcon } from "../icons";
import { ThemedText } from "../ThemedText";
import { Switch } from "../ui";
import { DimensionValue } from "react-native";

interface CurrencyToggleViewProps {
  width?: DimensionValue;
  height?: DimensionValue;
  fontSize?: number;
  paddingVertical?: number;
}

export const CurrencyToggleView = ({
  width = "100%",
  height = 60,
  fontSize = 24,
  paddingVertical = 12,
}: CurrencyToggleViewProps) => {
  const [isStimiCurrency, toggleStimiCurrency] = useState(false);

  return (
    <LinearGradient
      colors={["#F02E9530", "#F02E9500"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.stimiCurrencyToggle, { width, paddingVertical }]}
    >
      <Wrapper style={styles.flexBar}>
        <ThemedView
          style={[
            styles.logoBox,
            { width: fontSize * 1.2, height: fontSize * 1.2 },
          ]}
        >
          <LogoIcon />
        </ThemedView>
        <ThemedText style={[styles.amountText, { fontSize }]}>
          12,000,000
        </ThemedText>
        <Switch value={isStimiCurrency} onChange={toggleStimiCurrency} />
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
  logoBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#BF2678",
    backgroundColor: "#F02E95",
    elevation: 10,
    shadowColor: "#F02E9566",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    color: "white",
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
