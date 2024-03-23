import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import Header from "../components/HomeScreen/Header";
import Habits from "../components/HomeScreen/Habits";
import Achievements from "../components/HomeScreen/Achievements";
import Tips from "../components/HomeScreen/Tips";
import { ScrollView } from "react-native-gesture-handler";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20 }}>
        <Header />
      </View>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        snapToAlignment="start"
        bounces={false}
        style={{ marginBottom: 20 }}
      >
        <View style={[styles.card, styles.elevation, styles.shadowProp]}></View>
        <View style={[styles.card, styles.elevation, styles.shadowProp]}></View>
      </ScrollView>
      <View style={[styles.tipContainer, styles.elevation, styles.shadowProp]}>
        <View style={styles.tipCard}>
          <Tips />
        </View>
      </View>
    </View>
  );
}

const screenHeight = Platform.OS == "ios" ? 60 : 30;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 370,
    padding: 100,
    backgroundColor: "white",
    marginTop: 50,
    marginLeft: 10,
    marginRight: 5,
    marginBottom: 15,
    borderRadius: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: screenHeight,
  },
  // android shadow
  elevation: {
    elevation: 20,
    shadowColor: "#171717",
  },
  // ios shadow
  shadowProp: {
    shadowColor: "#777779",
    shadowOffset: { height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 7,
  },
  tipContainer: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowOffset: 12,
  },
  tipCard: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 30,
  },
});

export default HomeScreen;

// <View style={styles.container}>onnnnn
//   <Header />
//   <View style={styles.screenCard}>
//     <Habits />
//   </View>
//   <View style={styles.screenCard}>
//     <Achievements />
//   </View>
//   <View style={styles.screenCard}>
//     <Tips />
//   </View>
// </View>
