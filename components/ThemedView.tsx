import { View, type ViewProps } from "react-native";

export type ThemedViewProps = ViewProps & {};

export const ThemedView = ({ style, ...otherProps }: ThemedViewProps) => {
  return (
    <View style={[{ backgroundColor: "#FFF00" }, style]} {...otherProps} />
  );
};
