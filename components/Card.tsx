import {
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { ThemedText, ThemedView } from "@components/index";

interface CardProps {
  image: ImageSourcePropType | undefined;
  title: string;
  description: string;
  timeLeft: string;
  icon?: React.ReactElement;
  onPress: () => void;
  borderRadius?: number;
}

export const Card = ({
  image,
  title,
  description,
  timeLeft,
  icon,
  onPress,
  borderRadius = 8,
}: CardProps) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={1}>
      <ThemedView style={[styles.card, { borderRadius }]}>
        <Image source={image} style={[styles.image]} />
        <ThemedView style={styles.content}>
          <ThemedView style={styles.header}>
            <ThemedText style={styles.title}>{title}</ThemedText>
            <ThemedView style={styles.timeTag}>
              <ThemedText style={styles.timeText}>{timeLeft}</ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedText style={styles.description}>{description}</ThemedText>
        </ThemedView>
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
          activeOpacity={0.75}
        >
          <ThemedText style={styles.buttonText}>Place your bet</ThemedText>
          {icon}
        </TouchableOpacity>
      </ThemedView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: 20,
  },
  card: {
    width: 324,
    backgroundColor: "#1B1E23",
    marginVertical: 8,
    flexDirection: "column",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    borderRadius: 0,
  },
  content: {
    width: "100%",
    paddingHorizontal: 10,
    flex: 1,
    marginTop: 10,
    backgroundColor: "#FFF00",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF00",
  },
  title: {
    fontSize: 14,
    fontWeight: 500,
  },
  timeTag: {
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 8,
    backgroundColor: "#FFF00",
  },
  timeText: {
    fontSize: 12,
    color: "#FFFFFF80",
  },
  description: {
    fontSize: 12,
    marginVertical: 2,
  },
  button: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2B2E33",
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 8,
    justifyContent: "center",
    gap: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: 400,
    marginTop: -3,
  },
  icon: {
    marginLeft: 4,
  },
});
