import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colours } from "../components/theme";

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
        <Text style={{ fontSize: 26, color: "white" }}>Track your habits!</Text>
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => nav.navigate("Login")}
      >
        <Text style={{ fontSize: 24, color: "white" }}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => nav.navigate("Register")}
      >
        <Text style={{ fontSize: 24, color: "white" }}>Register</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  loginButton: {
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7398b1",
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
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8da85c",
  },
  touchable: {
    backgroundColor: colours.button,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
  },
});

export default WelcomeScreen;
