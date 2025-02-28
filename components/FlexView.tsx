import type { PropsWithChildren } from "react";
import { FlexAlignType, StyleSheet, ViewStyle } from "react-native";

import { ThemedView } from "./ThemedView";

type Props = PropsWithChildren<{
  direction?: "row" | "column" | "row-reverse" | "column-reverse" | undefined;
  gap?: number;
  alignItems?: FlexAlignType | undefined;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
  style?: ViewStyle;
}>;

export const FlexView = ({
  direction = "row",
  gap = 0,
  children,
  style,
  alignItems = "center",
  justifyContent,
}: Props) => {
  return (
    <ThemedView
      style={[
        styles.flex,
        style,
        { flexDirection: direction, gap, alignItems, justifyContent },
      ]}
    >
      {children}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  flex: {
    display: "flex",
    width: "100%",
    backgroundColor: "#FFF00",
  },
});
