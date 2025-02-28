import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

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
  return (
    <ThemedView style={styles.container}>
      {data?.label && (
        <ThemedView style={styles.labelBox}>
          <ThemedText style={styles.label}>{data.label}</ThemedText>
        </ThemedView>
      )}
      <ThemedView style={styles.cell}>
        {data?.value2 && (
          <ThemedText style={styles.smallText}>{data.value2}</ThemedText>
        )}
        <ThemedText style={styles.largeText}>{data.value1}</ThemedText>
      </ThemedView>
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
    width: 69,
    height: 64,
    borderRadius: 4,
    backgroundColor: "#FFF00",
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
    borderWidth: 1,
    borderColor: "#333",
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
