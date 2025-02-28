import { ReactElement } from "react";
import {
  ButtonProps as RNButtonProps,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ThemedText } from "../ThemedText";

interface ButtonProps extends RNButtonProps {
  title: string;
  bgColor?: string;
  color?: string;
  radius?: number;
  fontFamily?: string;
  icon?: ReactElement;
  iconSize?: number;
  iconColor?: string;
  paddingVertical?: number;
  paddingHorizontal?: number;
  onPress?: () => void;
}

export const Button = ({
  title,
  bgColor = "#FFFFFF1A",
  color = "#fff",
  radius = 6,
  fontFamily = "System",
  icon,
  iconSize = 20,
  iconColor = "#fff",
  paddingVertical = 8,
  paddingHorizontal = 8,
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
      ]}
      onPress={onPress}
      activeOpacity={0.75}
    >
      {icon}
      {title !== "" && <ThemedText style={[{ color }]}>{title}</ThemedText>}
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
