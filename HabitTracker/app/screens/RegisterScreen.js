import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import { auth } from "../../api/config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (email && password) {
      setLoading(true);
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User ID:", uid);
      } catch (error) {
        console.log("Error: ", error);
      } finally {
        setLoading(false);
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
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          placeholder="Email"
          style={{
            width: 250,
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
          secureTextEntry={true}
          style={{
            width: 250,
            marginTop: 20,
            padding: 20,
            borderRadius: 10,
            backgroundColor: "#e0e0e0",
          }}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        {loading ? (
          <ActivityIndicator
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 30,
              padding: 12,
            }}
            size="large"
            color="darkgrey"
          />
        ) : (
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
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterScreen;
