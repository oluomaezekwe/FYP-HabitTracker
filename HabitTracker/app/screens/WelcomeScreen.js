import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function WelcomeScreen() {
  const nav = useNavigation();

  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/welcomeBackground.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/welcomeImage.png")}
        />
        <Text style={{ fontSize: 42, color: "white" }}>ZenTrack</Text>
        <Text style={{ fontSize: 22, fontStyle: "italic", color: "white" }}>
          Master Your Habits, Master Your Zen
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.loginButton}
          onPress={() => nav.navigate("Login")}
        >
          <Text style={{ fontSize: 24, color: "white" }}>Log In</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.registerButton}
          onPress={() => nav.navigate("Register")}
        >
          <Text style={{ fontSize: 24, color: "white" }}>Register</Text>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    position: "absolute",
    top: 650,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  loginButton: {
    width: "80%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#8da85c",
    opacity: 0.9,
    borderRadius: 50,
  },
  logo: {
    width: 260,
    height: 260,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  registerButton: {
    width: "80%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7398b1",
    opacity: 0.9,
    borderRadius: 50,
  },
});

export default WelcomeScreen;
