import React from "react";
import { StyleSheet, Text, View } from "react-native";

function AchievementScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Achievement Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default AchievementScreen;
