import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "../components/HomeScreen/Header";
import Habits from "../components/HomeScreen/Habits";
import Achievements from "../components/HomeScreen/Achievements";
import Tips from "../components/HomeScreen/Tips";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.screenCard}>
        <Habits />
      </View>
      <View style={styles.screenCard}>
        <Achievements />
      </View>
      <View style={styles.screenCard}>
        <Tips />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  screenCard: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 10,
  },
});

export default HomeScreen;
