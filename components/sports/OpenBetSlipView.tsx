import { Dimensions, ImageSourcePropType, StyleSheet } from "react-native";

import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { CurrencyToggleView } from "./CurrencyToggleView";
import { TabView } from "../TabView";
import { Wrapper } from "../Wrapper";
import { BET_DATA } from "@/utils/mockup-data";
import { Button, Notification, RadioButton, RadioItem } from "../ui";
import { FlexView } from "../FlexView";
import { SingleBetSlipView } from "./SingleBetSlipView";
import { ParlayBetSlipView } from "./ParlayBetSlipView";

export type BetSlipDataType = {
  challengeTitle: string;
  teamName: string;
  brand: ImageSourcePropType | undefined;
  value1: string;
  value2: string;
};

interface OpenBetSlipViewProps {
  onPress?: () => void;
}

const BET_AMOUNTS = [
  { label: "25K", value: "25000" },
  { label: "50K", value: "50000" },
  { label: "100K", value: "100000" },
  { label: "Custom", value: "-1" },
];

export const OpenBetSlipView = ({}: OpenBetSlipViewProps) => {
  const dm = Dimensions.get("screen");

  const routes = [
    {
      key: "singles",
      title: "Singles",
      view: <SinglesView />,
    },
    {
      key: "parlay",
      title: "Parlay",
      view: <ParlayView />,
    },
  ];

  return (
    <ThemedView style={[styles.betSlipContainer, { width: dm.width }]}>
      <ThemedText style={styles.headerTitle}>betslip (2)</ThemedText>
      <TabView routes={routes} />
      <Wrapper style={{ paddingTop: 0 }}>
        <RadioButton type="button" onChange={() => {}}>
          {BET_AMOUNTS.map((item, index) => (
            <RadioItem key={index} label={item.label} value={item.value} />
          ))}
        </RadioButton>
        <ThemedView style={{ paddingVertical: 8 }}>
          <FlexView justifyContent="space-between">
            <ThemedText style={styles.labelText}>Total bet</ThemedText>
            <ThemedText style={styles.valueText}>0</ThemedText>
          </FlexView>
          <FlexView justifyContent="space-between">
            <ThemedText style={styles.labelText}>Potential win</ThemedText>
            <ThemedText style={[styles.valueText, { color: "#F02E95" }]}>
              0
            </ThemedText>
          </FlexView>
        </ThemedView>
        <Notification
          type="info"
          message="You will earn 360XP with this bet"
          onDismiss={() => console.log("Dismissed")}
          onAccept={() => console.log("Accepted")}
        />
        <ThemedView style={{ paddingVertical: 8 }}>
          <Button
            title="confirm bet"
            bgColor="#FFE100"
            fontSize={16}
            color="#53470C"
            paddingVertical={16}
          />
        </ThemedView>
        <ThemedText style={styles.labelText}>
          Max bet amount: 1.000.000
        </ThemedText>
      </Wrapper>
    </ThemedView>
  );
};

const SinglesView = ({ onPress }: OpenBetSlipViewProps) => {
  return (
    <ThemedView>
      <CurrencyToggleView height={48} fontSize={20} paddingVertical={0} />
      <Wrapper>
        <SingleBetSlipView data={BET_DATA} />
      </Wrapper>
    </ThemedView>
  );
};

const ParlayView = () => {
  return (
    <ThemedView>
      <CurrencyToggleView height={48} fontSize={20} paddingVertical={0} />
      <Wrapper>
        <ParlayBetSlipView data={BET_DATA} />
      </Wrapper>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: "center",
    fontFamily: "Joyride",
    fontSize: 20,
    paddingVertical: 15,
  },
  betSlipContainer: {
    width: "100%",
  },
  labelText: {
    color: "#FFFFFF60",
    textAlign: "center",
  },
  valueText: {
    color: "#FFF",
  },
});
