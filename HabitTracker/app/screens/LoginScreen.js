import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../api/config/firebase";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (email && password) {
      setLoading(true);
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.log("Error: ", error);
      } finally {
        setLoading(false);
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
          onChangeText={setEmail}
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
          onChangeText={setPassword}
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
            onPress={handleLogin}
          >
            <Text style={{ fontSize: 18 }}>Login</Text>
          </TouchableOpacity>
        )}
      </KeyboardAvoidingView>
    </View>
  );
}

export default LoginScreen;
