import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  Alert,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { auth } from "../../api/config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { colours } from "../components/theme";
import { KeyboardAvoidingView } from "react-native";

const RegisterScreen = () => {
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

  const handleRegister = async () => {
    if (email && password) {
      setLoading(true);
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.log("Error registering account: ", error);
        Alert.alert("Registration Unsuccessful", error.message);
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
        backgroundColor: "#c1d4dF",
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
                source={require("../../assets/registerImage.png")}
              />
            ) : (
              <Image
                style={styles.imageBig}
                source={require("../../assets/registerImage.png")}
              />
            )}
          </View>
          <KeyboardAvoidingView
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
                onSubmitEditing={handleRegister}
              />
              {loading ? (
                <ActivityIndicator
                  style={styles.button}
                  size="small"
                  color={"white"}
                />
              ) : (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleRegister}
                >
                  <Text style={{ fontSize: 18, color: "white" }}>Register</Text>
                </TouchableOpacity>
              )}
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 315,
    backgroundColor: "#8da85c",
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

export default RegisterScreen;
