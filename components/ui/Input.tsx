import React from "react";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
import { ThemedView } from "../ThemedView";

interface InputProps extends TextInputProps {
  icon?: React.ReactElement;
  radius?: number;
}

export const Input = ({ icon, radius = 10, style, ...props }: InputProps) => {
  return (
    <ThemedView style={[styles.container, { borderRadius: radius }]}>
      {icon && <ThemedView style={styles.iconContainer}>{icon}</ThemedView>}
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor="#FFFFFF60"
        {...props}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF1A",
    paddingHorizontal: 12,
    borderRadius: 6,
    borderColor: "#CCC",
  },
  iconContainer: {
    marginRight: 8,
    backgroundColor: "#FFF00",
    color: "#FFF",
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    lineHeight: 18,
    color: "#FFF",
    outline: "none",
    borderWidth: 0,
    outlineColor: "transparent",
  },
});
