import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { BoardView } from "../BoardView";
import { FlexView } from "../FlexView";
import { BetSlipDataType } from "./TeamBetSlipView";
import { TrashIcon } from "../icons";
import { Wrapper } from "../Wrapper";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Input } from "../ui";

interface ParlayBetSlipViewViewProps {
  data?: BetSlipDataType[];
  onDelete?: (index: number, data?: BetSlipDataType) => void;
  onDeleteAll?: () => void;
}

export const ParlayBetSlipView = ({
  data,
  onDelete,
  onDeleteAll,
}: ParlayBetSlipViewViewProps) => {
  return (
    <BoardView bgColor="#FFFFFF1A" style={{ marginBottom: 10 }}>
      <FlexView>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDeleteAll?.()}
          activeOpacity={0.9}
        >
          <TrashIcon color="#FFF" size={18} />
        </TouchableOpacity>
        <Wrapper style={styles.fullWidth}>
          <FlexView direction="column" gap={8}>
            <ThemedView style={styles.fullWidth}>
              <FlexView justifyContent="space-between">
                <ThemedView>
                  <ThemedText style={styles.normalText}>
                    {`${data?.length} Pick Parlay`}
                  </ThemedText>
                  <ThemedText style={styles.grayText}>
                    Ends at: 8:00 PM EST
                  </ThemedText>
                </ThemedView>
                <Input
                  value={"0"}
                  width={100}
                  height={32}
                  style={{ fontSize: 14 }}
                />
              </FlexView>
            </ThemedView>
            {data?.map((item, index) => (
              <ThemedView key={index} style={styles.fullWidth}>
                <FlexView gap={10} justifyContent="space-between">
                  <TouchableOpacity
                    style={styles.deleteIndividualButton}
                    onPress={() => onDelete?.(index, item)}
                    activeOpacity={0.9}
                  >
                    <TrashIcon color="#FFF" size={12} />
                  </TouchableOpacity>
                  <ThemedView style={{ flex: 1 }}>
                    <ThemedText style={styles.normalText}>
                      {item.challengeTitle}
                    </ThemedText>
                    <ThemedText style={styles.boldText}>
                      {item.teamName} {item.value2}
                    </ThemedText>
                  </ThemedView>

                  <ThemedText style={styles.normalText}>
                    {item.value1}
                  </ThemedText>
                </FlexView>
              </ThemedView>
            ))}
          </FlexView>
        </Wrapper>
      </FlexView>
    </BoardView>
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
  deleteIndividualButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF33",
    borderRadius: 3,
    paddingHorizontal: 4,
    paddingVertical: 4,
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
    lineHeight: 19,
    fontWeight: 400,
  },
  boldText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 700,
  },
  grayText: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: 400,
    color: "#FFFFFF50",
  },
});
