import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../api/config/firebase";
import { colours } from "../components/theme";
import useAuth from "../hooks/useAuth";

function ProfileScreen() {
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/profileImage3.png")}
        />
      </View>
      <View
        style={[styles.bottomContainer, styles.shadowAndroid, styles.shadowIOS]}
      >
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <Text style={{ fontSize: 18, color: colours.text }}>
            Email Address
          </Text>
          <Text
            style={{
              fontSize: 24,
              color: colours.text,
              textDecorationLine: "underline",
            }}
          >
            {user?.email}
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 250,
          }}
        >
          <TouchableOpacity onPress={handleLogout} style={styles.button}>
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f6f1",
    width: "100%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colours.buttonAlt,
    width: "95%",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
  bottomContainer: {
    backgroundColor: "white",
    height: "50%",
    padding: 40,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  image: {
    width: 350,
    height: 350,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "50%",
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
});

export default ProfileScreen;
{
  /* <View style={styles.container}>
      <Text style={styles.textHeader}>User</Text>

      <View style={{ paddingTop: 10 }}>
        <TouchableOpacity onPress={handleLogout} style={styles.touchable}>
          <Text style={styles.textTouchable}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View> */
}
