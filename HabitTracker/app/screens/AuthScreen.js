import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

function AuthScreen() {
  const nav = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Welcome to Habit Tracker
      </Text>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Start Tracking Your Habits Today!
      </Text>
      <TouchableOpacity
        onPress={() => nav.navigate("Inner", { screen: "Home" })}
      >
        <Text>Login In</Text>
      </TouchableOpacity>
      <StatusBar />
    </View>
  );
}

export default AuthScreen;
