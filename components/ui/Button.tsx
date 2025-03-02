import { ReactElement } from "react";
import {
  GestureResponderEvent,
  ButtonProps as RNButtonProps,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { ThemedText } from "../ThemedText";

interface ButtonProps extends RNButtonProps {
  title: string;
  bgColor?: string;
  color?: string;
  radius?: number;
  fontFamily?: string;
  fontSize?: number;
  icon?: ReactElement;
  iconSize?: number;
  iconColor?: string;
  paddingVertical?: number;
  paddingHorizontal?: number;
  style?: ViewStyle;
  onPress?: (event: GestureResponderEvent) => void;
}

export const Button = ({
  title,
  bgColor = "#FFFFFF1A",
  color = "#fff",
  radius = 6,
  fontSize = 12,
  fontFamily = "Joyride",
  icon,
  iconSize = 20,
  iconColor = "#fff",
  paddingVertical = 8,
  paddingHorizontal = 8,
  style,
  onPress,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: bgColor,
          borderRadius: radius,
          paddingVertical,
          paddingHorizontal,
        },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {icon}
      {title !== "" && (
        <ThemedText
          style={[{ color, fontFamily, fontSize, lineHeight: fontSize * 1.1 }]}
        >
          {title}
        </ThemedText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {},
});
