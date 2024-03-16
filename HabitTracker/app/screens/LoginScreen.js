import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../api/config/firebase";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const textInputRef = useRef();

  const handleLogin = async () => {
    if (email && password) {
      setLoading(true);
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.log("Error logging in: ", error);
      } finally {
        setLoading(false);
      }
    } else {
      Alert.alert("Failed to login", "Please enter your email and password");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={styles.textInput}
        value={email}
        onChangeText={setEmail}
        onSubmitEditing={() => textInputRef.current.focus()}
        blurOnSubmit={false}
      />
      <TextInput
        ref={textInputRef}
        placeholder="Password"
        secureTextEntry={true}
        style={styles.textInput}
        value={password}
        onChangeText={setPassword}
        onSubmitEditing={handleLogin}
      />
      {loading ? (
        <ActivityIndicator
          style={styles.activityIndicator}
          size="large"
          color="darkgrey"
        />
      ) : (
        <TouchableOpacity style={styles.touchable} onPress={handleLogin}>
          <Text style={{ fontSize: 18 }}>Login</Text>
        </TouchableOpacity>
      )}
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
  textInput: {
    width: 250,
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#e0e0e0",
  },
  activityIndicator: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    padding: 12,
  },
  touchable: {
    backgroundColor: "darkgrey",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    padding: 12,
    borderRadius: 12,
  },
});

export default LoginScreen;
