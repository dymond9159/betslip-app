import { useEffect, useState } from "react";
import {
  Dimensions,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
} from "react-native";

import {
  Button,
  ButtonProps,
  CurrencyView,
  Notification,
  NotificationProps,
  RadioButton,
  RadioItem,
} from "../ui";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { TabView } from "../TabView";
import { Wrapper } from "../Wrapper";
import { FlexView } from "../FlexView";
import { CurrencyToggleView } from "./CurrencyToggleView";
import { SingleBetSlipView } from "./SingleBetSlipView";
import { ParlayBetSlipView } from "./ParlayBetSlipView";
import { CheckIcon, FourStartIcon } from "../icons";
import { useBetSlipTheme } from "@/hooks/useBetSlipTheme";
import { Themes } from "@/constants/Theme";
import { useCurrencyExchange } from "@/hooks/useCurrencyExchange";
import { currencyFormat } from "@/utils/functions";

export type BetSlipDataType = {
  challengeTitle: string;
  teamName: string;
  brand: ImageSourcePropType | undefined;
  value1: string;
  value2: string;
};

interface OpenBetSlipViewProps {
  data: BetSlipDataType[];
  onClose?: () => void;
}

interface SinglesViewProps {
  data: BetSlipDataType[];
  totalBetAmount?: number;
  onDelete?: (index: number) => void;
}

interface ParlayViewProps extends SinglesViewProps {
  onDeleteAll?: () => void;
}

export const MAX_BET_AMOUNT = 1000000;

const BET_AMOUNTS = {
  coin: [
    { label: "25K", value: "25000" },
    { label: "50K", value: "50000" },
    { label: "100K", value: "100000" },
    { label: "Custom", value: "0" },
  ],
  cash: [
    { label: "$50", value: "50" },
    { label: "$100", value: "100" },
    { label: "$200", value: "200" },
    { label: "Custom", value: "0" },
  ],
};

const initButtonState: ButtonProps = {
  title: "confirm bet",
  icon: null,
};

export const OpenBetSlipView = ({ data, onClose }: OpenBetSlipViewProps) => {
  const dm = Dimensions.get("screen");
  const { theme, switchTheme } = useBetSlipTheme();

  const [notification, setNotification] = useState<NotificationProps | null>(
    null
  );
  const [totalBetAmount, setTotalBetAmount] = useState<number>(0);
  const [defaultAmount, setDefaultAmount] = useState<number>(-1);
  const [isBetting, setIsBetting] = useState<boolean>(false);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [buttonState, setButtonState] = useState<ButtonProps>(initButtonState);

  const routes = [
    {
      key: "singles",
      title: "Singles",
      view: <SinglesView data={data} totalBetAmount={totalBetAmount} />,
    },
    {
      key: "parlay",
      title: "Parlay",
      view: <ParlayView data={data} totalBetAmount={totalBetAmount} />,
    },
  ];

  useEffect(() => {
    if (totalBetAmount <= 0 || totalBetAmount > MAX_BET_AMOUNT) {
      reset();
      return;
    }
    setNotification({
      type: "info",
      message: (
        <FlexView gap={5} justifyContent="center">
          <FourStartIcon />
          You will earn 360XP with this bet
        </FlexView>
      ),
    });
  }, [totalBetAmount]);

  useEffect(() => {
    if (isConfirmed) {
      setButtonState({
        title: "confirmed",
        icon: <CheckIcon color={"#2D2606"} />,
      });
    } else {
      setButtonState(initButtonState);
    }
  }, [isConfirmed]);

  const reset = () => {
    setTotalBetAmount(0);
    setDefaultAmount(-1);
    setNotification(null);
    setIsBetting(false);
    setIsConfirmed(false);
  };

  const handleChoose = (value: string) => {
    setTotalBetAmount(Number(value));
  };

  const handleConfirmBet = () => {
    if (isBetting || isConfirmed) return;

    setIsBetting(true);
    setTimeout(() => {
      // Assume that finish the betting process.
      setIsBetting(false);
      setIsConfirmed(true);
    }, 3000);
  };

  const handleFollowAction = (keep: boolean) => {
    if (keep) {
      reset();
      switchTheme(theme.name === "coin" ? "cash" : "coin");
    } else {
      onClose?.();
    }
  };

  return (
    <ThemedView style={[styles.betSlipContainer, { width: dm.width }]}>
      <ThemedText style={styles.headerTitle}>
        {`betslip (${data?.length})`}
      </ThemedText>
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        style={{ flex: 1 }}
      >
        <TabView routes={routes} />
        {/* <Wrapper style={{ paddingTop: 0 }}>
          <Notification
            type="warning"
            message="One or more prices may have changed. Check and accept the changes for your selections."
            textAlign="left"
            bordered
            borderStyle="dashed"
          />
        </Wrapper> */}
        <Wrapper style={{ paddingTop: 0 }}>
          <RadioButton
            type="button"
            defaultValue={String(defaultAmount)}
            onChange={handleChoose}
          >
            {BET_AMOUNTS[theme.name as keyof typeof BET_AMOUNTS].map(
              (item, index) => (
                <RadioItem key={index} label={item.label} value={item.value} />
              )
            )}
          </RadioButton>
          <ThemedView style={{ paddingVertical: 8 }}>
            <FlexView justifyContent="space-between">
              <ThemedText style={styles.labelText}>Total bet</ThemedText>
              <ThemedText style={styles.valueText}>
                {currencyFormat(totalBetAmount, theme.name, 1)}
              </ThemedText>
            </FlexView>
            <FlexView justifyContent="space-between">
              <ThemedText style={styles.labelText}>Potential win</ThemedText>
              <ThemedText
                style={[styles.valueText, { color: theme.primaryColor }]}
              >
                {currencyFormat(totalBetAmount * 1.6, theme.name, 1)}
              </ThemedText>
            </FlexView>
          </ThemedView>
          {notification && (
            <Notification
              type={notification.type}
              message={notification.message}
            />
          )}
          <ThemedView style={{ paddingVertical: 8 }}>
            <Button
              title={buttonState.title}
              loading={isBetting}
              disabled={!notification}
              bgColor={theme.secondaryColor}
              color={theme.secondaryDeepColor}
              fontSize={16}
              icon={buttonState?.icon}
              iconColor="#2D2606"
              paddingVertical={16}
              onPress={() => {
                handleConfirmBet();
              }}
            />
          </ThemedView>
          <ThemedText style={[styles.labelText, { marginBottom: 10 }]}>
            Max bet amount: {currencyFormat(MAX_BET_AMOUNT, theme.name, 0.01)}
          </ThemedText>
        </Wrapper>
        {isConfirmed && (
          <Wrapper style={{ paddingTop: 0, paddingBottom: 10 }}>
            <FlexView style={styles.finalText} gap={8}>
              <ThemedText>Would you like to copy this bet for</ThemedText>
              <CurrencyView
                size={18}
                currency={theme.name === "coin" ? "cash" : "coin"}
              />
              <ThemedText
                style={{
                  color:
                    theme.name === "coin"
                      ? Themes.cash.primaryColor
                      : Themes.coin.primaryColor,
                }}
              >
                {theme.name === "coin" ? "Cash?" : "Coin?"}
              </ThemedText>{" "}
            </FlexView>
            <FlexView gap={10} justifyContent="space-between">
              <Button
                title="no"
                style={{ flex: 1 }}
                onPress={() => handleFollowAction(false)}
              />
              <Button
                title="yes"
                bgColor={
                  theme.name === "coin"
                    ? Themes.cash.primaryColor
                    : Themes.coin.primaryColor
                }
                style={{ flex: 1 }}
                onPress={() => handleFollowAction(true)}
              />
            </FlexView>
          </Wrapper>
        )}
      </ScrollView>
    </ThemedView>
  );
};

const SinglesView = ({
  data,
  totalBetAmount = 0,
  onDelete,
}: ParlayViewProps) => {
  return (
    <ThemedView>
      <CurrencyToggleView
        amount={useCurrencyExchange().amount}
        height={48}
        fontSize={20}
        paddingVertical={0}
      />
      <Wrapper>
        <SingleBetSlipView data={data} totalBetAmount={totalBetAmount} />
      </Wrapper>
    </ThemedView>
  );
};

const ParlayView = ({
  data,
  totalBetAmount = 0,
  onDelete,
  onDeleteAll,
}: ParlayViewProps) => {
  return (
    <ThemedView>
      <CurrencyToggleView
        amount={useCurrencyExchange().amount}
        height={48}
        fontSize={20}
        paddingVertical={0}
      />
      <Wrapper>
        <ParlayBetSlipView data={data} totalBetAmount={totalBetAmount} />
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
  finalText: {
    fontSize: 16,
    fontWeight: 500,
    color: "#FFF",
    marginBottom: 10,
  },
});
