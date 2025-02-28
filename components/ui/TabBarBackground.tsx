import { LinearGradient } from "expo-linear-gradient";

export default function TabBarBackground() {
  return (
    <LinearGradient
      colors={["#101216", "#101216"]} // Adjust gradient colors as needed
      style={{
        flex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      start={[0, 0]}
      end={[1, 1]}
    />
  );
}

export function useBottomTabOverflow() {
  return 0;
}
