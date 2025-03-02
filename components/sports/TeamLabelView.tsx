import React from "react";
import { StyleSheet, Image, ImageSourcePropType } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { AvatarType } from "../ui";
import { BettingOption } from "./BettingBoardView";

export type TeamData = {
  teamName?: string;
  brand?: ImageSourcePropType | undefined;
  bettingData?: BettingOption[];
};

export type ChallengeData = {
  A: TeamData;
  B: TeamData;
  visitors?: AvatarType[];
};

interface TeamLabelProps extends TeamData {
  radius?: number;
}

export const TeamLabelView = ({
  brand,
  teamName,
  radius = 4,
}: TeamLabelProps) => {
  return (
    <ThemedView style={[styles.container, { borderRadius: radius }]}>
      <ThemedView style={[styles.imageWrapper]}>
        <Image source={brand} style={[styles.image]} />
      </ThemedView>
      <ThemedText style={[styles.teamName]}>{teamName}</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 137,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#30353D",
  },
  imageWrapper: {
    width: 48,
    height: 60,
    marginRight: 10,
    overflow: "hidden", // Ensures the image fits within the radius
  },
  image: {
    width: "100%",
    height: "100%",
    // resizeMode: "cover",
  },
  teamName: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 18,
    flex: 1,
  },
});

export default TeamLabelView;
