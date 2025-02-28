import { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";

import { ChallengeView, Container, StackView, Wrapper } from "@/components";
import { ChevronRightIcon, LogoIcon, SearchIcon } from "@/components/icons";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Input, Subject, Switch } from "@/components/ui";
import { ThemedView, ThemedText, Category, FlexView, Card } from "@/components";
import { CATEGORIES, MATCHES, TABLES } from "../utils/mokup-data";
import Divider from "@/components/ui/Divider";

export default function HomeScreen() {
  const [isStimiCurrency, toggleStimiCurrency] = useState(false);

  return (
    <Container>
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <LinearGradient
          colors={["#F02E9530", "#F02E9500"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.stimiCurrencyToggle}
        >
          <Wrapper style={styles.flexBar}>
            <ThemedView style={styles.logoBox}>
              <LogoIcon />
            </ThemedView>
            <ThemedText style={styles.amountText}>12,000,000</ThemedText>
            <Switch value={isStimiCurrency} onChange={toggleStimiCurrency} />
          </Wrapper>
        </LinearGradient>
        <Wrapper style={styles.flexBar}>
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
              <Subject title="Live sports" />
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
          <StackView>
            <Wrapper style={{ marginBottom: 10 }}>
              <FlexView justifyContent="space-between">
                <ThemedText>NBA</ThemedText>
                <Button
                  title="Popular"
                  bgColor="#FFE100"
                  color="#53470C"
                  paddingHorizontal={8}
                  paddingVertical={6}
                />
              </FlexView>
            </Wrapper>
            {TABLES.map((table, index) => (
              <>
                {index !== 0 && <Divider />}
                <Wrapper key={index}>
                  <ChallengeView isFirst={index === 0} data={table} />
                </Wrapper>
              </>
            ))}
          </StackView>
        </Wrapper>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  stimiCurrencyToggle: {
    width: "100%",
    height: 60,
  },
  flexBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    padding: 4,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#BF2678",
    backgroundColor: "#F02E95",
    elevation: 10,
    shadowColor: "#F02E9566",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    color: "white",
  },
  amountText: {
    flex: 1,
    marginLeft: 8,
    fontFamily: "Joyride",
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 28.63,
    letterSpacing: 0,
  },
  scrollView: {
    gap: 20,
  },
});
