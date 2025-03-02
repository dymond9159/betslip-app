import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { BoardView } from "../BoardView";
import { FlexView } from "../FlexView";
import { BetSlipDataType } from "./TeamBetSlipView";
import { TrashIcon } from "../icons";
import { Wrapper } from "../Wrapper";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Input } from "../ui";

interface SingleBetSlipViewProps {
  data?: BetSlipDataType[];
  onDelete?: (index: number, data?: BetSlipDataType) => void;
}

export const SingleBetSlipView = ({
  data,
  onDelete,
}: SingleBetSlipViewProps) => {
  return (
    <>
      {data?.map((item, index) => (
        <BoardView key={index} bgColor="#FFFFFF1A" style={{ marginBottom: 10 }}>
          <FlexView>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => onDelete?.(index, item)}
              activeOpacity={0.9}
            >
              <TrashIcon color="#FFF" size={18} />
            </TouchableOpacity>
            <Wrapper style={styles.fullWidth}>
              <FlexView direction="column" gap={8}>
                <ThemedView style={styles.fullWidth}>
                  <FlexView justifyContent="space-between">
                    <ThemedText style={styles.normalText}>
                      {item.challengeTitle}
                    </ThemedText>
                    <ThemedText style={styles.grayText}>
                      Ends at: 8:00 PM EST
                    </ThemedText>
                  </FlexView>
                </ThemedView>
                <ThemedView style={styles.fullWidth}>
                  <FlexView gap={10}>
                    <Image source={item.brand} style={styles.image} />
                    <ThemedText style={styles.boldText}>
                      {item.teamName} {item.value2}
                    </ThemedText>
                  </FlexView>
                </ThemedView>
                <ThemedView style={styles.fullWidth}>
                  <FlexView justifyContent="space-between">
                    <ThemedText style={styles.normalText}>
                      {item.value1}
                    </ThemedText>
                    <Input
                      value={"0"}
                      width={100}
                      height={32}
                      style={{ fontSize: 14 }}
                    />
                  </FlexView>
                </ThemedView>
              </FlexView>
            </Wrapper>
          </FlexView>
        </BoardView>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  deleteButton: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF33",
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  fullWidth: {
    flex: 1,
    width: "100%",
  },
  image: {
    width: 24,
    height: 24,
    borderRadius: 3,
    backgroundColor: "#FFFFFF33",
  },
  normalText: {
    fontSize: 16,
    fontWeight: 500,
  },
  boldText: {
    fontSize: 16,
    fontWeight: 700,
  },
  grayText: {
    fontSize: 12,
    fontWeight: 400,
    color: "#FFFFFF50",
  },
});
