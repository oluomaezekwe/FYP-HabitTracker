import React from "react";
import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Header from "../components/HomeScreen/Header";
import Habits from "../components/HomeScreen/Habits";
import Achievements from "../components/HomeScreen/Achievements";
import Tips from "../components/HomeScreen/Tips";
import { ScrollView } from "react-native-gesture-handler";

function HomeScreen() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/appBackground4.png")}
    >
      <View style={{ paddingHorizontal: 20 }}>
        <Header />
      </View>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        bounces={false}
        style={{ paddingHorizontal: 15 }}
      >
        <View style={[styles.card, styles.shadowAndroid, styles.shadowIOS]}>
          <Habits />
        </View>
        <View style={[styles.card, styles.shadowAndroid, styles.shadowIOS]}>
          <Achievements />
        </View>
      </ScrollView>
      <View
        style={[styles.tipContainer, styles.shadowAndroid, styles.shadowIOS]}
      >
        <View style={styles.tipCard}>
          <Tips />
        </View>
      </View>
    </ImageBackground>
  );
}

const screenHeight = Platform.OS == "ios" ? 60 : 40;

const styles = StyleSheet.create({
  card: {
    flex: 2,
    width: 365,
    height: 420,
    backgroundColor: "white",
    marginTop: 50,
    marginLeft: 15,
    borderRadius: 30,
  },
  container: {
    flex: 1,
    paddingTop: screenHeight,
  },
  // android shadow
  shadowAndroid: {
    elevation: 15,
    shadowColor: "#171717",
  },
  // ios shadow
  shadowIOS: {
    shadowColor: "#777779",
    shadowOffset: { height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 7,
  },
  tipContainer: {
    height: 260,
    backgroundColor: "white",
    marginHorizontal: 15,
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
