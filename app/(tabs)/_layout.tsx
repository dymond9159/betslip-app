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
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Container, ThemedText } from "@/components";
import HeaderView from "@/components/HeaderView";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Container>
          <HeaderView />
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
              key={0}
              name="index"
              options={{
                title: "Sports",
                tabBarIcon: ({ color }) => <SportsIcon color={color} />,
              }}
            />
            <Tabs.Screen
              key={1}
              name="featured"
              options={{
                title: "Featured",
                tabBarIcon: ({ color }) => <FeatureIcon color={color} />,
              }}
            />
            <Tabs.Screen
              key={2}
              name="mybets"
              options={{
                title: "My bets",
                tabBarIcon: ({ color }) => <BetsIcon color={color} />,
              }}
            />
            <Tabs.Screen
              key={3}
              name="social"
              options={{
                title: "Social",
                tabBarIcon: ({ color }) => <SocialIcon color={color} />,
              }}
            />
            <Tabs.Screen
              key={4}
              name="reward"
              options={{
                title: "Reward",
                tabBarIcon: ({ color }) => <RewardIcon color={color} />,
              }}
            />
          </Tabs>
        </Container>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
