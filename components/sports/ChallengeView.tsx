import { StyleSheet } from "react-native";

import { FlexView } from "../FlexView";
import TeamLabelView, { ChallengeData } from "./TeamLabelView";
import { ThemedView } from "../ThemedView";
import { BettingBoardView, BettingOption } from "./BettingBoardView";
import GroupAvatar from "../ui/GroupAvatar";
import { ThemedText } from "../ThemedText";

interface ChallengeViewProps {
  isFirst: boolean;
  data: ChallengeData;
}

const ZERO_DATA: BettingOption[] = [
  { label: "Moneyline", value1: 0 },
  { label: "Spread", value1: 0, value2: 0 },
  { label: "Total", value1: 0, value2: 0 },
];

export const ChallengeView = ({ data, isFirst }: ChallengeViewProps) => {
  return (
    <ThemedView>
      <FlexView style={styles.row} direction="row" gap={10}>
        <TeamLabelView teamName={data.A?.teamName} brand={data.A?.brand} />
        <ThemedView>
          <FlexView direction="row" gap={5}>
            {(data.A?.bettingData || ZERO_DATA).map((item, index) => (
              <BettingBoardView
                key={index}
                data={{ ...item, label: isFirst ? item.label : undefined }}
              />
            ))}
          </FlexView>
        </ThemedView>
      </FlexView>
      <FlexView style={styles.row} direction="row" gap={10}>
        <TeamLabelView teamName={data.B?.teamName} brand={data.B?.brand} />
        <ThemedView>
          <FlexView direction="row" gap={5}>
            {(data.B?.bettingData || ZERO_DATA).map((item, index) => (
              <BettingBoardView
                key={index}
                data={{ ...item, label: undefined }}
              />
            ))}
          </FlexView>
        </ThemedView>
      </FlexView>
      <FlexView justifyContent="space-between">
        <GroupAvatar users={data.visitors || []} style={{ marginTop: 5 }} />
        <ThemedText style={styles.endTimeText}>Ends at: 8:00 PM EST</ThemedText>
      </FlexView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  row: {
    marginVertical: 4,
  },
  endTimeText: {
    fontSize: 12,
    color: "#FFFFFF80",
  },
});
