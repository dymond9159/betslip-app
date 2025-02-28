import React from "react";
import { Image, StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";

export type AvatarType = {
  username: string;
  image?: string;
};

interface AvatarProps extends AvatarType {
  size?: number;
}

export const Avatar = ({ image, username, size = 28 }: AvatarProps) => {
  const isUser = !username.includes("+");

  return (
    <ThemedView
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      {image ? (
        <Image
          source={require(`@assets/images/avatars/James.png`)}
          style={[styles.image, { width: size, height: size }]}
        />
      ) : (
        <ThemedText
          style={[styles.initials, { fontSize: size * (isUser ? 0.5 : 0.4) }]}
        >
          {isUser ? username.charAt(0).toUpperCase() : username}
        </ThemedText>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#30353D",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#1B1E23",
  },
  image: {
    width: "100%",
    height: "100%",
    // resizeMode: "cover",
  },
  initials: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Avatar;
