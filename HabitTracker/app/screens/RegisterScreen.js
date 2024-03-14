import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { auth } from "../../api/config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.log("Error: ", error);
      }
    } else {
      Alert.alert(
        "Registration Unsuccessful",
        "Please enter a valid email and password greater than 6 characters"
      );
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
        onChangeText={(value) => setEmail(value)}
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
        onChangeText={(value) => setPassword(value)}
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
        onPress={handleRegister}
      >
        <Text style={{ fontSize: 18 }}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
