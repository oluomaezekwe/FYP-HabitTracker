import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { FontAwesome6 } from "@expo/vector-icons";
import { colours } from "../theme";

function Header() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 5,
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: "bold", color: colours.text }}>
        Hello, User
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <FontAwesome6 name="user" size={28} color={colours.text} />
      </TouchableOpacity>
    </View>
  );
}

export default Header;
