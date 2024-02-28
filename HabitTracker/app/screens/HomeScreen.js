import React from "react";
import { SafeAreaView, View } from "react-native";

import Header from "../components/HomeScreen/Header";
import Habits from "../components/HomeScreen/Habits";
import Achievements from "../components/HomeScreen/Achievements";
import Tips from "../components/HomeScreen/Tips";

function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <Header />
      </View>
      <View
        style={{
          fontSize: 18,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
          marginBottom: 10,
        }}
      >
        <Habits />
      </View>
      <View
        style={{
          fontSize: 18,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
          marginBottom: 10,
        }}
      >
        <Achievements />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Tips />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
