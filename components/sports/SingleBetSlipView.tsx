import { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";

import { Input } from "../ui";
import { BoardView } from "../BoardView";
import { FlexView } from "../FlexView";
import { Wrapper } from "../Wrapper";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { BetSlipDataType } from "./OpenBetSlipView";
import { TrashIcon } from "../icons";

interface SingleBetSlipViewProps {
  data?: BetSlipDataType[];
  totalBetAmount?: number;
  onChangeBetAmount?: (value: string) => void;
  onDelete?: (index: number) => void;
}

export const SingleBetSlipView = ({
  data,
  totalBetAmount = 0,
  onChangeBetAmount,
  onDelete,
}: SingleBetSlipViewProps) => {
  const count = data?.length;

  const [currentValue, setCurrentValue] = useState<number[]>(
    new Array(count).fill(0)
  );

  useEffect(() => {
    const avgBetAmount = totalBetAmount / (count || 1);
    setCurrentValue(new Array(count).fill(avgBetAmount));
  }, [totalBetAmount]);

  const handleChangeAmount = (index: number, value: string) => {
    setCurrentValue((prev) => {
      const updatedValues = [...prev];
      updatedValues[index] = parseFloat(value) || 0;
      return updatedValues;
    });
  };

  return (
    <>
      {data?.map((item, index) => (
        <BoardView key={index} bgColor="#FFFFFF1A" style={{ marginBottom: 10 }}>
          <FlexView>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => onDelete?.(index)}
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
                      inputMode="decimal"
                      value={currentValue[index].toLocaleString()}
                      width={100}
                      height={32}
                      style={{ fontSize: 14 }}
                      onChangeText={(value) => handleChangeAmount(index, value)}
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
    fontWeight: 400,
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
