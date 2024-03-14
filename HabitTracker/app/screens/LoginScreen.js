import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../api/config/firebase";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.log("Error: ", error);
      }
    } else {
      Alert.alert("Failed to login", "Please enter your email and password");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <TextInput
        placeholder="Email"
        style={{
          width: "95%",
          marginTop: 20,
          padding: 20,
          borderRadius: 10,
          backgroundColor: "#e0e0e0",
        }}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={{
          width: "95%",
          marginTop: 20,
          padding: 20,
          borderRadius: 10,
          backgroundColor: "#e0e0e0",
        }}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "darkgrey",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
          padding: 12,
          borderRadius: 12,
        }}
        // onPress={() => nav.navigate("Inner", { screen: "Home" })}
        onPress={handleLogin}
      >
        <Text style={{ fontSize: 18 }}>Login</Text>
      </TouchableOpacity>
      <StatusBar />
    </View>
  );
}

export default LoginScreen;
