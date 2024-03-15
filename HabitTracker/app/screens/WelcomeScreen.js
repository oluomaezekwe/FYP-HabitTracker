import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

function WelcomeScreen() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 26, fontWeight: "bold", marginBottom: 10 }}>
        Welcome to Habit Tracker
      </Text>
      <Text style={{ fontSize: 20, marginBottom: 40 }}>
        Start Tracking Your Habits Today!
      </Text>
      <View style={{ gap: 10 }}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => nav.navigate("Login")}
        >
          <Text style={{ fontSize: 18 }}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => nav.navigate("Register")}
        >
          <Text style={{ fontSize: 18 }}>Register</Text>
        </TouchableOpacity>
      </View>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  touchable: {
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
  },
});

export default WelcomeScreen;
