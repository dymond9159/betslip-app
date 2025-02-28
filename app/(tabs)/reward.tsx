import { StyleSheet, ScrollView } from "react-native";

import { Container } from "@/components";
import { ThemedText } from "@/components";

export default function RewardScreen() {
  return (
    <Container>
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <ThemedText>Reward screen</ThemedText>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    gap: 20,
  },
});
