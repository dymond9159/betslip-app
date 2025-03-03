import { StyleSheet } from "react-native";

import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { FlexView } from "../FlexView";

interface SubjectViewProps {
  title?: string;
  size?: number;
}

export const SubjectView = ({ title, size = 4 }: SubjectViewProps) => {
  return (
    <FlexView gap={8}>
      <ThemedView
        style={[styles.ul, { width: size, height: size, padding: size }]}
      ></ThemedView>
      <ThemedText style={styles.subjectText}>{title}</ThemedText>
    </FlexView>
  );
};

const styles = StyleSheet.create({
  ul: {
    borderRadius: 50,
    backgroundColor: "#F02E31",
    borderWidth: 5,
    borderColor: "#48191d",
  },
  subjectText: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 17,
  },
});
