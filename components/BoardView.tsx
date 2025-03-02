import { PropsWithChildren } from "react";
import { Image, TouchableOpacity, StyleSheet, ViewStyle } from "react-native";

import { ThemedView, Wrapper } from "@/components";

interface BoardViewProps extends PropsWithChildren {
  borderRadius?: number;
  bgColor?: string;
  style?: ViewStyle;
}

export const BoardView = ({
  borderRadius = 8,
  bgColor,
  children,
  style,
}: BoardViewProps) => {
  return (
    <ThemedView
      style={[styles.card, style, { borderRadius, backgroundColor: bgColor }]}
    >
      {children}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#1B1E23",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    overflow: "hidden",
  },
});
