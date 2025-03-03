import React, { createContext, useContext, useState } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
} from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { useBetSlipTheme } from "@/hooks/useBetSlipTheme";

interface RadioButtonContextProps {
  selectedValue: string;
  onChange: (value: string, event: GestureResponderEvent) => void;
  type: "radio" | "button";
  checkedColor: string;
  defaultColor: string;
}

const RadioButtonContext = createContext<RadioButtonContextProps | null>(null);

interface RadioButtonProps {
  type?: "radio" | "button";
  defaultValue?: string;
  onChange: (value: string) => void;
  checkedColor?: string;
  defaultColor?: string;
  children: React.ReactNode;
  style?: ViewStyle;
}

export const RadioButton = ({
  type = "radio",
  defaultValue = "0",
  onChange,
  checkedColor = "#F02E95",
  defaultColor = "#FFFFFF1A",
  children,
  style,
}: RadioButtonProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const { theme } = useBetSlipTheme();

  const handlePress = (value: string, event: GestureResponderEvent) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <RadioButtonContext.Provider
      value={{
        selectedValue,
        onChange: handlePress,
        type,
        checkedColor: theme.primaryColor,
        defaultColor,
      }}
    >
      <ThemedView style={[styles.container, style]}>{children}</ThemedView>
    </RadioButtonContext.Provider>
  );
};

interface RadioItemProps {
  label: string;
  value: string;
  style?: ViewStyle;
  labelStyle?: TextStyle;
}

export const RadioItem = ({
  label,
  value,
  style,
  labelStyle,
}: RadioItemProps) => {
  const context = useContext(RadioButtonContext);

  if (!context) {
    throw new Error("RadioItem must be used within a RadioButton component.");
  }

  const { selectedValue, onChange, type, checkedColor, defaultColor } = context;
  const checked = selectedValue === value;

  return (
    <TouchableOpacity
      style={[
        styles.radioItem,
        {
          backgroundColor: checked ? checkedColor : defaultColor,
          borderRadius: type === "radio" ? 50 : 4,
          paddingVertical: type === "button" ? 5 : 5,
          paddingHorizontal: type === "button" ? 16 : 5,
        },
        style,
      ]}
      onPress={(event) => onChange(value, event)}
      activeOpacity={0.8}
    >
      <ThemedText
        style={[styles.label, { color: checked ? "#fff" : "#ccc" }, labelStyle]}
      >
        {label}
      </ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  radioItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "transparent",
  },
  label: {
    fontSize: 14,
  },
});
