import { StyleSheet, ViewStyle } from "react-native";
import Avatar, { AvatarType } from "./Avatar";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";

interface GroupAvatarProps {
  users: AvatarType[];
  size?: number;
  style?: ViewStyle;
}

const GroupAvatar = ({ users, size = 28, style }: GroupAvatarProps) => {
  const displayUsers = users.slice(0, 4);
  const extraCount = users.length > 4 ? users.length - 4 : 0;

  return (
    <ThemedView
      style={[styles.container, { width: size * 2, height: size }, style]}
    >
      {displayUsers.map((user, index) => (
        <ThemedView
          key={index}
          style={[styles.avatarWrapper, { left: index * (size * 0.8) }]}
        >
          <Avatar image={user.image} username={user.username} size={size} />
        </ThemedView>
      ))}
      {extraCount > 0 && (
        <ThemedView
          style={[
            styles.extraCount,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              left: displayUsers.length * (size * 0.8),
            },
          ]}
        >
          <Avatar username={`+${extraCount}`} size={size} />
        </ThemedView>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarWrapper: {
    position: "absolute",
  },
  extraCount: {
    backgroundColor: "#30353D",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  extraText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default GroupAvatar;
