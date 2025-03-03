import React from "react";
import {
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

export type NotificationType = "info" | "warning";

export interface NotificationProps {
  type?: NotificationType;
  title?: React.ReactNode;
  message: React.ReactNode;
  bordered?: boolean;
  borderStyle?: "solid" | "dashed" | "dotted";
  backgroundColor?: string;
  color?: string;
  action?: boolean;
  actionButtons?: React.ReactNode;
  onDismiss?: () => void;
  onAccept?: () => void;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  messageStyle?: TextStyle;
  textAlign?: "auto" | "left" | "right" | "center" | "justify" | undefined;
}

export const Notification = ({
  type = "info",
  title,
  message,
  bordered = false,
  borderStyle = "solid",
  backgroundColor,
  color,
  action = false,
  actionButtons,
  onDismiss,
  onAccept,
  style,
  titleStyle,
  messageStyle,
  textAlign = "center",
}: NotificationProps) => {
  const defaultBgColor = type === "info" ? "#44FFC41A" : "#FFE1001A";
  const defaultTextColor = type === "info" ? "#00FFF2" : "#FFE100";

  return (
    <ThemedView
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor || defaultBgColor,
          borderColor: bordered ? defaultTextColor : "transparent",
          borderWidth: bordered ? 1 : 0,
          borderStyle: borderStyle,
        },
        style,
      ]}
    >
      {typeof title === "string" ? (
        <ThemedText
          style={[
            styles.title,
            { color: color || defaultTextColor, textAlign },
            titleStyle,
          ]}
        >
          {title}
        </ThemedText>
      ) : (
        title
      )}

      {typeof message === "string" ? (
        <ThemedText
          style={[
            styles.message,
            messageStyle,
            { color: color || defaultTextColor, textAlign },
          ]}
        >
          {message}
        </ThemedText>
      ) : (
        <ThemedText
          style={[
            styles.message,
            messageStyle,
            { color: color || defaultTextColor, textAlign },
          ]}
        >
          {message}
        </ThemedText>
      )}

      {action && (
        <ThemedView style={styles.actions}>
          {actionButtons ? (
            actionButtons
          ) : (
            <>
              {onDismiss && (
                <TouchableOpacity style={styles.button} onPress={onDismiss}>
                  <ThemedText style={styles.buttonText}>Dismiss</ThemedText>
                </TouchableOpacity>
              )}
              {onAccept && (
                <TouchableOpacity
                  style={[styles.button, styles.acceptButton]}
                  onPress={onAccept}
                >
                  <ThemedText style={[styles.buttonText, styles.acceptText]}>
                    Accept
                  </ThemedText>
                </TouchableOpacity>
              )}
            </>
          )}
        </ThemedView>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: "#FFFFFF1A",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
  acceptButton: {
    backgroundColor: "#F02E95",
  },
  acceptText: {
    color: "#fff",
  },
});
