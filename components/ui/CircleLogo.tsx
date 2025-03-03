import { StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import { ReactNode } from "react";

interface CircleLogoProps {
  size: number;
  children: ReactNode;
}

export const CircleLogo = ({ size, children }: CircleLogoProps) => {
  return (
    <ThemedView
      style={[styles.logoBox, { width: size * 1.2, height: size * 1.2 }]}
    >
      {children}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  logoBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#BF2678",
    backgroundColor: "#F02E95",
    elevation: 10,
    shadowColor: "#F02E9566",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    color: "white",
  },
});
