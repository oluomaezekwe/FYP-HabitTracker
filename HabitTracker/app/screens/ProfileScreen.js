import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../api/config/firebase";

function ProfileScreen() {
  const handleLogout = async () => {
    await signOut(auth);
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
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 10,
          paddingTop: 20,
        }}
      >
        User
      </Text>

      <View style={{ paddingTop: 10 }}>
        <TouchableOpacity
          onPress={handleLogout}
          style={{
            backgroundColor: "dodgerblue",
            padding: 12,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 18, color: "white" }}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProfileScreen;
