import type { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";

import { ThemedView } from "@/components";
import { DefaultTheme } from "@react-navigation/native";
import { useBetSlipTheme } from "@/hooks/useBetSlipTheme";

type Props = PropsWithChildren;

const defaultFonts = DefaultTheme.fonts;

export const Container = ({ children }: Props) => {
  const { theme } = useBetSlipTheme();
  return (
    <ThemedView style={[styles.content, { backgroundColor: theme.background }]}>
      {children}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    overflow: "hidden",
    fontFamily: defaultFonts.regular.fontFamily,
    fontWeight: defaultFonts.regular.fontWeight,
  },
});
