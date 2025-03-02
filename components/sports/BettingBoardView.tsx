import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";

export interface BettingOption {
  label?: string;
  value1: number;
  value2?: number;
}

interface BettingBoardProps {
  data: BettingOption;
  onPress?: (item: BettingOption) => void;
}

export const BettingBoardView = ({ data, onPress }: BettingBoardProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handlePress = () => {
    setIsFocused(!isFocused);
    if (onPress) onPress(data);
  };

  return (
    <ThemedView style={styles.container}>
      {data?.label && (
        <ThemedView style={styles.labelBox}>
          <ThemedText style={styles.label}>{data.label}</ThemedText>
        </ThemedView>
      )}
      <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
        <ThemedView style={[styles.cell, isFocused && styles.cellFocused]}>
          {data?.value2 && (
            <ThemedText style={styles.smallText}>{data.value2}</ThemedText>
          )}
          <ThemedText style={styles.largeText}>{data.value1}</ThemedText>
        </ThemedView>
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF00",
  },
  labelBox: {
    position: "absolute",
    top: -26,
    width: "100%",
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    flex: 1,
  },
  cell: {
    width: 55,
    height: 60,
    borderRadius: 4,
    backgroundColor: "#FFF00",
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
    borderWidth: 1,
    borderColor: "#333",
  },
  cellFocused: {
    backgroundColor: "#FFE1001A",
    borderColor: "#FFE100",
  },
  largeText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFF",
  },
  smallText: {
    fontSize: 12,
    color: "#AAA",
  },
});
