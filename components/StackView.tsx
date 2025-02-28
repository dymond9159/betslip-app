import { PropsWithChildren } from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";

import { ThemedView, Wrapper } from "@/components";

interface StackViewProps extends PropsWithChildren {
  borderRadius?: number;
}

export const StackView = ({ borderRadius = 8, children }: StackViewProps) => {
  return (
    <ThemedView style={[styles.card, { borderRadius }]}>{children}</ThemedView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#1B1E23",
    flexDirection: "column",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    overflow: "hidden",
  },
});
