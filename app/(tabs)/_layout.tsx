import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  BetsIcon,
  FeatureIcon,
  RewardIcon,
  SocialIcon,
  SportsIcon,
} from "@/components/icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "dark"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
            backgroundColor: "#101216",
            height: 60,
          },
          default: {
            height: 60,
            backgroundColor: "#101216",
            borderTopWidth: 2,
            borderTopColor: "#F3F3F31A",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -8 },
            shadowOpacity: 0.4,
            shadowRadius: 20,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Sports",
          tabBarIcon: ({ color }) => <SportsIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="featured"
        options={{
          title: "Featured",
          tabBarIcon: ({ color }) => <FeatureIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="mybets"
        options={{
          title: "My bets",
          tabBarIcon: ({ color }) => <BetsIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="social"
        options={{
          title: "Social",
          tabBarIcon: ({ color }) => <SocialIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="reward"
        options={{
          title: "Reward",
          tabBarIcon: ({ color }) => <RewardIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
