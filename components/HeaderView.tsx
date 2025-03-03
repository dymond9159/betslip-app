import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

import { StyleSheet } from "react-native";

import { Button } from "./ui";
import { BookmarkIcon, NotificationIcon, ProfileIcon } from "./icons";
import { FlexView } from "./FlexView";
import { Wrapper } from "./Wrapper";

export default function HeaderView() {
  return (
    <ThemedView style={styles.header}>
      <Wrapper>
        <FlexView justifyContent="space-between">
          <ThemedText style={styles.textLogo}>sports</ThemedText>
          <ThemedView>
            <FlexView gap={8}>
              <Button title="" icon={<NotificationIcon />} />
              <Button title="" icon={<BookmarkIcon />} />
              <Button title="" icon={<ProfileIcon />} />
            </FlexView>
          </ThemedView>
        </FlexView>
      </Wrapper>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    overflow: "hidden",
    color: "white",
  },
  textLogo: {
    flex: 1,
    fontFamily: "Joyride",
    fontSize: 32,
    lineHeight: 36,
    fontWeight: 400,
    letterSpacing: 0,
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
});
