import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  ActivityIndicator,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../api/config/firebase";
import { colours } from "../components/theme";

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
        Alert.alert("Login Unsuccessful", error.message);
      } finally {
        setLoading(false);
      }
    } else {
      Alert.alert("Failed to login", "Please enter your email and password");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/loginImage.png")}
          />
        </View>
        <View style={styles.innerContainer}>
          <View>
            <Text>Email Address</Text>
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              style={styles.textInput}
              value={email}
              onChangeText={setEmail}
              onSubmitEditing={() => textInputRef.current.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View style={{ marginTop: 25 }}>
            <Text>Password</Text>
            <TextInput
              ref={textInputRef}
              placeholder="Password"
              secureTextEntry={true}
              style={styles.textInput}
              value={password}
              onChangeText={setPassword}
              onSubmitEditing={handleLogin}
            />
          </View>
          {loading ? (
            <ActivityIndicator
              style={styles.activityIndicator}
              size="large"
              color={colours.activityIndicator}
            />
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={{ fontSize: 18, color: "white" }}>Login</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  activityIndicator: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    padding: 12,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 315,
    backgroundColor: "#7398b1",
    padding: 15,
    marginTop: 50,
    borderRadius: 12,
  },
  container: {
    flex: 1,
    backgroundColor: "#cbdab7",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    height: 100,
    padding: 50,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  logo: {
    width: 260,
    height: 260,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 40,
  },
  textInput: {
    width: 315,
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: colours.textInput,
  },
});

export default LoginScreen;
