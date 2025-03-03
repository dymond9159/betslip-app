import { ReactElement, useEffect, useRef } from "react";
import {
  GestureResponderEvent,
  ButtonProps as RNButtonProps,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  Animated,
  Easing,
} from "react-native";
import { ThemedText } from "../ThemedText";
import { LoadingIcon } from "../icons";
import { ThemedView } from "../ThemedView";

export interface ButtonProps extends RNButtonProps {
  title: string;
  bgColor?: string;
  color?: string;
  radius?: number;
  fontFamily?: string;
  fontSize?: number;
  icon?: ReactElement | null;
  iconSize?: number;
  iconColor?: string;
  paddingVertical?: number;
  paddingHorizontal?: number;
  style?: ViewStyle;
  loading?: boolean;
  loadingTitle?: string;
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
  paddingVertical = 12,
  paddingHorizontal = 12,
  style,
  disabled,
  loading = false,
  loadingTitle = "confirming...",
  onPress,
}: ButtonProps) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (loading) {
      spinValue.setValue(0);

      const startSpin = () => {
        Animated.loop(
          Animated.timing(spinValue, {
            toValue: 1,
            duration: 1500,
            easing: Easing.linear,
            useNativeDriver: true,
          })
        ).start();
      };

      startSpin();
    } else {
      spinValue.stopAnimation();
    }

    return () => {
      spinValue.stopAnimation();
    };
  }, [loading, spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: bgColor,
          borderRadius: radius,
          paddingVertical,
          paddingHorizontal,
          opacity: disabled ? 0.6 : 1,
          display: "flex",
          flexDirection: "row",
          gap: 10,
        },
        style,
      ]}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {icon && <ThemedView>{icon}</ThemedView>}
      {loading && (
        <ThemedView style={{ marginRight: 10 }}>
          <Animated.View
            style={[styles.spinner, { transform: [{ rotate: spin }] }]}
          >
            <LoadingIcon color={iconColor} />
          </Animated.View>
        </ThemedView>
      )}
      {title !== "" && (
        <ThemedText
          style={[{ color, fontFamily, fontSize, lineHeight: fontSize * 1.1 }]}
        >
          {loading ? loadingTitle : title}
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
  spinner: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {},
});
