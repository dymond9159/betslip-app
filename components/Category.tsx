import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedView } from "@components/index";

interface CategoryProps {
  image: any;
  title: string;
  size?: number;
  onPress?: () => void;
}

export const Category = ({
  image,
  title,
  size = 40,
  onPress,
}: CategoryProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <ThemedView
        style={[
          styles.circle,
          { width: size, height: size, borderRadius: size / 2 },
        ]}
      >
        <Image
          source={image}
          style={[styles.image, { width: size * 0.6, height: size * 0.6 }]}
        />
      </ThemedView>
      <Text style={styles.categoryText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: 20,
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282A2D",
    overflow: "hidden",
    elevation: 4, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    resizeMode: "contain",
  },
  categoryText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 400,
    color: "#FFF",
    textAlign: "center",
  },
});
