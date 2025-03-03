import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { ThemedView } from "../ThemedView";

interface InputProps extends TextInputProps {
  icon?: React.ReactElement;
  radius?: number;
  width?: number;
  height?: number;
}

export const Input = ({
  icon,
  radius = 4,
  width,
  height = 40,
  style,
  ...props
}: InputProps) => {
  return (
    <ThemedView
      style={[styles.container, { width, height, borderRadius: radius }]}
    >
      {icon && <ThemedView style={styles.iconContainer}>{icon}</ThemedView>}
      <TextInput
        style={[styles.input, style, { width, height, outline: "none" }]}
        placeholderTextColor="#FFFFFF60"
        underlineColorAndroid="transparent"
        textAlign="center"
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
    fontSize: 16,
    lineHeight: 18,
    color: "#FFF",
    borderWidth: 0,
  },
});
