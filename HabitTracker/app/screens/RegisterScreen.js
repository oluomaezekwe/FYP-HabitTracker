import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TextInput, Button, TouchableOpacity, Text } from "react-native";

const RegisterScreen = () => {
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
      <TextInput
        placeholder="Username"
        style={{
          width: "95%",
          marginTop: 20,
          padding: 20,
          borderRadius: 10,
          backgroundColor: "#e0e0e0",
        }}
        // value={username}
        // onChangeText={setUsername}
      />
      <TextInput
        placeholder="Email"
        style={{
          width: "95%",
          marginTop: 20,
          padding: 20,
          borderRadius: 10,
          backgroundColor: "#e0e0e0",
        }}
        // value={email}
        // onChangeText={setUsername}
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
        // value={password}
        // onChangeText={setPassword}
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
        onPress={() => nav.navigate("Inner", { screen: "Home" })}
      >
        <Text style={{ fontSize: 18 }}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
