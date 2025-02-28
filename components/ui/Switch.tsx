import React, { useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  withSpring,
  useSharedValue,
  interpolateColor,
} from "react-native-reanimated";

interface SwitchProps {
  onChange: (newValue: boolean) => void;
  activeTrackColor?: string;
  inActiveTrackColor?: string;
  thumbColor?: string;
  value: boolean;
}

export const Switch = ({
  onChange,
  activeTrackColor = "#F02E95",
  inActiveTrackColor = "#F02E95",
  thumbColor = "#FFF",
  value,
}: SwitchProps) => {
  const switchTranslate = useSharedValue(value ? 21 : 0);

  useEffect(() => {
    switchTranslate.value = withSpring(value ? 21 : 0, {
      mass: 0.1,
      damping: 25,
      stiffness: 120,
      overshootClamping: true,
    });
  }, [value]);

  const backgroundColor = interpolateColor(
    switchTranslate.value,
    [0, 21],
    [inActiveTrackColor, activeTrackColor]
  );

  const memoizedOnSwitchPressCallback = React.useCallback(() => {
    onChange(!value);
  }, [onChange, value]);

  return (
    <Pressable onPress={memoizedOnSwitchPressCallback}>
      <Animated.View
        style={[styles.containerStyle, { backgroundColor: backgroundColor }]}
      >
        <Animated.View
          style={[
            styles.circleStyle,
            { backgroundColor: thumbColor },
            {
              transform: [{ translateX: switchTranslate.value }],
            },
            styles.shadowValue,
          ]}
        />
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  circleStyle: {
    width: 18,
    height: 18,
    borderRadius: 20,
  },
  containerStyle: {
    width: 44,
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 46.5,
  },
  shadowValue: {
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.33,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
