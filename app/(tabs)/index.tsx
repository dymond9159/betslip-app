import { useCallback, useRef } from "react";
import { useNavigation } from "expo-router";
import { StyleSheet, ScrollView } from "react-native";
import { BottomSheetModal as BottomSheetModalBase } from "@gorhom/bottom-sheet";

import { BottomSheetModal, Container, BoardView, Wrapper } from "@/components";
import {
  ChallengeView,
  CurrencyToggleView,
  OpenBetSlipView,
} from "@/components/sports";
import { Button, Divider, Input, SubjectView } from "@/components/ui";
import { ThemedView, ThemedText, Category, FlexView, Card } from "@/components";
import { BET_DATA, CATEGORIES, MATCHES, TABLES } from "../../utils/mockup-data";
import { ChevronRightIcon, SearchIcon } from "@/components/icons";
import { useBetSlipTheme } from "@/hooks/useBetSlipTheme";
import { useCurrencyExchange } from "@/hooks/useCurrencyExchange";

export default function HomeScreen() {
  const bottomSheetModalRef = useRef<BottomSheetModalBase>(null);
  const navigation = useNavigation();
  const { theme } = useBetSlipTheme();

  const handleOpenModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
    navigation.setOptions({ tabBarStyle: { display: "none" } });
  }, [navigation]);

  const handleCloseModal = useCallback(() => {
    navigation.setOptions({ tabBarStyle: { display: "block", height: 60 } });
  }, [navigation]);

  return (
    <Container>
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <CurrencyToggleView amount={useCurrencyExchange().amount} />
        <Wrapper>
          <Input
            icon={<SearchIcon />}
            placeholder="Search..."
            onChange={() => {}}
          />
        </Wrapper>
        <Wrapper>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            {CATEGORIES.map((category, index) => (
              <Category
                key={index}
                image={category.image}
                title={category.title}
                onPress={() => alert(category.title)}
              />
            ))}
          </ScrollView>
        </Wrapper>
        <Wrapper>
          <FlexView direction="row" justifyContent="space-between">
            <ThemedView>
              <SubjectView title="Live sports" />
            </ThemedView>
            <ThemedText>View all</ThemedText>
          </FlexView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            {MATCHES.map((match, index) => (
              <Card
                key={index}
                image={match.image}
                title={match.title}
                description={match.description}
                timeLeft={match.timeLeft}
                icon={<ChevronRightIcon size={12} color="white" />}
                onPress={() => alert(`Bet Placed on ${match.description}!`)}
              />
            ))}
          </ScrollView>
        </Wrapper>
        <Wrapper>
          <BoardView>
            <Wrapper style={{ marginBottom: 10 }}>
              <FlexView justifyContent="space-between">
                <ThemedText>NBA</ThemedText>
                <Button
                  title="popular"
                  bgColor={theme.secondaryColor}
                  color={theme.secondaryDeepColor}
                  paddingHorizontal={8}
                  paddingVertical={6}
                  fontSize={12}
                />
              </FlexView>
            </Wrapper>
            {TABLES.map((table, index) => (
              <ThemedView key={index} style={{ width: "100%" }}>
                {index !== 0 && <Divider />}
                <Wrapper>
                  <ChallengeView isFirst={index === 0} data={table} />
                </Wrapper>
              </ThemedView>
            ))}
          </BoardView>
        </Wrapper>
      </ScrollView>
      <ThemedView style={styles.overlayButton}>
        <Wrapper>
          <Button
            title="open bet slip"
            bgColor={theme.secondaryColor}
            color={theme.secondaryDeepColor}
            fontSize={16}
            style={styles.buttonShadow}
            onPress={() => handleOpenModal()}
          ></Button>
        </Wrapper>
      </ThemedView>
      <BottomSheetModal ref={bottomSheetModalRef} onClose={handleCloseModal}>
        <OpenBetSlipView
          data={BET_DATA}
          onClose={() => {
            handleCloseModal();
          }}
        />
      </BottomSheetModal>
    </Container>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    gap: 20,
  },
  overlayButton: {
    width: "100%",
    position: "sticky",
    bottom: 0,
  },
  buttonShadow: {
    shadowColor: "#FFE10033",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 16,

    // Android Shadow
    elevation: 5,
  },
});
