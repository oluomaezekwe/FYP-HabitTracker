import React, { useEffect, useRef, useState } from "react";
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
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../api/config/firebase";
import { colours } from "../components/theme";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [keyboardStatus, setKeyboardStatus] = useState("");

  const textInputRef = useRef();

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("Keyboard Shown");
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("Keyboard Hidden");
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

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
    <View
      style={{
        backgroundColor: "#cbdab7",
        width: "100%",
      }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            marginTop: 40,
          }}
        >
          <View style={styles.imageContainer}>
            {keyboardStatus == "Keyboard Shown" ? (
              <Image
                style={styles.imageSmall}
                source={require("../../assets/loginImage.png")}
              />
            ) : (
              <Image
                style={styles.imageBig}
                source={require("../../assets/loginImage.png")}
              />
            )}
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={[
              styles.formContainer,
              styles.shadowAndroid,
              styles.shadowIOS,
            ]}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 50,
              }}
            >
              <Text style={styles.text}>Email Address</Text>
              <TextInput
                placeholder="Email"
                keyboardType="email-address"
                style={styles.textInput}
                value={email}
                onChangeText={setEmail}
                onSubmitEditing={() => textInputRef.current.focus()}
                blurOnSubmit={false}
              />
              <Text style={[styles.text, { marginTop: 10 }]}>Password</Text>
              <TextInput
                ref={textInputRef}
                placeholder="Password"
                secureTextEntry={true}
                autoCapitalize="none"
                style={styles.textInput}
                value={password}
                onChangeText={setPassword}
                onSubmitEditing={handleLogin}
              />
              {loading ? (
                <ActivityIndicator
                  style={styles.button}
                  size="small"
                  color={"white"}
                />
              ) : (
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                  <Text style={{ fontSize: 18, color: "white" }}>Login</Text>
                </TouchableOpacity>
              )}
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 315,
    backgroundColor: "#7398b1",
    padding: 15,
    marginTop: 20,
    borderRadius: 12,
  },
  formContainer: {
    backgroundColor: "white",
    height: "60%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  imageBig: {
    width: 260,
    height: 260,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "40%",
  },
  imageSmall: {
    width: 180,
    height: 180,
  },
  // android shadow
  shadowAndroid: {
    elevation: 10,
    shadowOffset: {
      height: 1,
    },
    shadowColor: "#171717",
  },
  // ios shadow
  shadowIOS: {
    shadowColor: "#777779",
    shadowOffset: { height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 7,
  },
  text: {
    alignSelf: "flex-start",
    marginLeft: 52,
    fontSize: 16,
    color: "#616161",
  },
  textInput: {
    width: 315,
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: colours.textInput,
  },
});

export default LoginScreen;
