import type { PropsWithChildren, ReactElement } from "react";
import { StyleSheet, ViewStyle } from "react-native";

import { ThemedView } from "./ThemedView";

type WrapperProps = PropsWithChildren<{
  style?: ViewStyle;
}>;

export const Wrapper = ({ style, children }: WrapperProps) => {
  return <ThemedView style={[styles.wrapper, style]}>{children}</ThemedView>;
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    padding: 12,
    backgroundColor: "#FFF00",
  },
});
