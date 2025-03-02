import React, { useState, useCallback, ReactElement } from "react";
import { Text, useWindowDimensions, StyleSheet } from "react-native";
import {
  TabView as BaseTabView,
  TabBar,
  TabBarProps,
} from "react-native-tab-view";

interface TabViewProps {
  routes?: { key: string; title: string; view: ReactElement | null }[];
  defaultRoute?: number;
}

export const TabView = ({
  routes = [
    { key: "first", title: "Home", view: <Text>Home Screen</Text> },
    { key: "second", title: "Profile", view: <Text>Profile Screen</Text> },
  ],
  defaultRoute = 0,
}: TabViewProps) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(defaultRoute);

  const renderScene = ({ route }: { route: { key: string } }) => {
    const foundRoute = routes.find((r) => r.key === route.key);
    return foundRoute?.view || null;
  };

  const renderTabBar = useCallback(
    (props: TabBarProps<any>) => (
      <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        style={styles.tabBar}
        // labelStyle={styles.label}
      />
    ),
    []
  );

  return (
    <BaseTabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBar: {
    backgroundColor: "#FFF00",
  },
  indicator: {
    backgroundColor: "#FFF",
    height: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 400,
    color: "#FFF",
  },
  text: {
    fontSize: 16,
    fontWeight: 400,
  },
});
