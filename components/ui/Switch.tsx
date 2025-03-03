import React, { useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  withSpring,
  useSharedValue,
  useDerivedValue,
  interpolateColor,
} from "react-native-reanimated";

interface SwitchProps {
  onChange: (newValue: boolean) => void;
  inActiveColor: string;
  activeColor: string;
  thumbColor?: string;
  value: boolean;
}

const INACTIVE = 0;
const ACTIVE = 21;

export const Switch = ({
  value,
  onChange,
  inActiveColor,
  activeColor,
  thumbColor = "#FFF",
}: SwitchProps) => {
  const handleSwitch = () => {
    const newValue = !value;
    onChange?.(newValue);
  };

  return (
    <Pressable onPress={handleSwitch}>
      <Animated.View
        style={[
          styles.containerStyle,
          { backgroundColor: !value ? inActiveColor : activeColor },
        ]}
      >
        <Animated.View
          style={[
            styles.circleStyle,
            { backgroundColor: thumbColor },
            {
              transform: [{ translateX: !value ? INACTIVE : ACTIVE }],
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
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.33,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
