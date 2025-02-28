import { StyleSheet, ScrollView } from "react-native";

import { Container } from "@/components";
import { ThemedText } from "@/components";

export default function SocialScreen() {
  return (
    <Container>
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <ThemedText>Social screen</ThemedText>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    gap: 20,
  },
});
