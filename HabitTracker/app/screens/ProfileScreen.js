import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

function ProfileScreen() {
  const nav = useNavigation();

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
          style={{
            backgroundColor: "dodgerblue",
            padding: 12,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          onPress={() => nav.navigate("Auth")}
        >
          <Text style={{ fontSize: 18, color: "white" }}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProfileScreen;
