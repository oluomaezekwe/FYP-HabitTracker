import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../api/config/firebase";

function ProfileScreen() {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>User</Text>

      <View style={{ paddingTop: 10 }}>
        <TouchableOpacity onPress={handleLogout} style={styles.touchable}>
          <Text style={styles.textTouchable}>Log Out</Text>
        </TouchableOpacity>
      </View>
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
  textHeader: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    paddingTop: 20,
  },
  touchable: {
    backgroundColor: "dodgerblue",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  textTouchable: {
    fontSize: 18,
    color: "white",
  },
});

export default ProfileScreen;
