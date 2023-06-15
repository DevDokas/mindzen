import { Slot } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import Navbar from "./components/Navbar";

export default function Layout(): any {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Head</Text>
        <Slot />
        <Navbar />
      </View>
    </View>
  );
}

// Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
