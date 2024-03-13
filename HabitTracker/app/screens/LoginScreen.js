import React from "react";
import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

function LoginScreen() {
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
      {/* <View>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} />
      </View> */}
      <StatusBar />
    </View>
  );
}

export default LoginScreen;
