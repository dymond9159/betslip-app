import type { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";

import { ThemedView } from "@/components";
import { useBottomTabOverflow } from "@/components/ui/TabBarBackground";
import { useColorScheme } from "@/hooks/useColorScheme";
import { DefaultTheme } from "@react-navigation/native";

type Props = PropsWithChildren;

const defaultFonts = DefaultTheme.fonts;

export const Container = ({ children }: Props) => {
  const colorScheme = useColorScheme() ?? "dark";
  const bottom = useBottomTabOverflow();

  return <ThemedView style={styles.content}>{children}</ThemedView>;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: "#101216",
    fontFamily: defaultFonts.regular.fontFamily,
    fontWeight: defaultFonts.regular.fontWeight,
  },
});
