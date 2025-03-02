import React from "react";
import { View, StyleSheet } from "react-native";

interface DividerProps {
  color?: string;
  thickness?: number;
  marginVertical?: number;
}

export const Divider = ({
  color = "#30353D",
  thickness = 1,
  marginVertical = 0,
}: DividerProps) => {
  return (
    <View
      style={[
        styles.divider,
        { backgroundColor: color, height: thickness, marginVertical },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    width: "100%",
  },
});
