import React from "react";

import { Text, TouchableOpacity, View } from "react-native";

import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function Header() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 7,
        marginHorizontal: 5,
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>Habits</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Create Habit")}>
        <FontAwesome6 name="add" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default Header;
